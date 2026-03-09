import axios from "axios";

const HF_CHAT_URL = "https://router.huggingface.co/v1/chat/completions";
const HF_MODELS = (process.env.HF_MODELS || process.env.HF_MODEL || "mistralai/Mistral-7B-Instruct-v0.2,meta-llama/Llama-3.1-8B-Instruct")
  .split(",")
  .map((model) => model.trim())
  .filter(Boolean);
const SYSTEM_PROMPT =
  process.env.HF_SYSTEM_PROMPT ||
  "You are Ken's AI assistant. Be concise, accurate, and practical about programming and web development.";

function extractReplyText(payload) {
  const content = payload?.choices?.[0]?.message?.content;
  return typeof content === "string" ? content.trim() : "";
}

function isModelUnsupportedError(error) {
  const code = error?.response?.data?.error?.code;
  const message = String(error?.response?.data?.error?.message || "").toLowerCase();
  return code === "model_not_supported" || message.includes("not supported");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body || {};
  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    let lastError;
    for (const model of HF_MODELS) {
      try {
        const response = await axios.post(
          HF_CHAT_URL,
          {
            model,
            messages: [
              { role: "system", content: SYSTEM_PROMPT },
              { role: "user", content: message },
            ],
            max_tokens: 300,
            temperature: 0.7,
          },
          {
            headers: {
              Authorization: `Bearer ${process.env.HF_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );

        const reply = extractReplyText(response.data);
        if (!reply) {
          return res.status(502).json({ error: "No reply returned by model" });
        }
        return res.status(200).json({ reply, model });
      } catch (error) {
        lastError = error;
        if (isModelUnsupportedError(error)) {
          continue;
        }
        throw error;
      }
    }

    throw lastError || new Error("No available model");
  } catch (error) {
    const statusCode = error.response?.status || 500;
    const details = error.response?.data || error.message;
    return res.status(statusCode).json({ error: "Chat request failed", details });
  }
}
