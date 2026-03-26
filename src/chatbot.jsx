import React from 'react'

const Chatbot = () => (
  <>
    <div id="chatPanel" className="fixed right-4 bottom-[84px] w-[340px] max-w-[calc(100vw-32px)] h-[540px] max-h-[calc(100vh-96px)] bg-white border border-zinc-100 shadow-2xl hidden flex-col z-[60] !rounded-none" aria-hidden="true">
      <div className="px-[14px] pt-4 pb-[14px] border-b border-zinc-200 flex items-center justify-between gap-[10px]">
        <div className="flex items-center gap-[10px]">
          <img src="pfp2.png" alt="Ken profile" className="w-[34px] h-[34px] object-cover !rounded-none" />
          <div>
            <div className="text-[14px] font-bold leading-[1.15]">Chat with Ken</div>
            <div className="mt-[2px] flex items-center gap-[7px] text-[12px] text-[#101010]"><span className="w-2 h-2 bg-[#16a34a] inline-block !rounded-none"></span> Online</div>
          </div>
        </div>
        <button id="chatClose" className="w-[26px] h-[26px] border-none bg-transparent text-[#111111] text-[25px] leading-none !rounded-none" type="button" aria-label="Close chat">×</button>
      </div>
      <div id="chatMessages" className="flex-1 overflow-auto p-[14px]">
        <div className="flex items-center gap-[10px] mb-[10px] text-[#161616] text-[12px] font-semibold">
          <img src="pfp2.png" alt="Ken profile small" className="w-[22px] h-[22px] object-cover !rounded-none" />
          <span>Kristian Ken Agbayani</span>
        </div>
        <div className="w-fit max-w-[85%] bg-gray-100 text-[#141414] text-[13px] leading-[1.35] py-3 px-[11px] !rounded-none mb-3 break-words ">Hi there! 👋 Thanks for visiting my website. Feel free to ask me anything about programming, web
          development, or my experiences in tech. Let me know how I can help!</div>
      </div>
      <div className="border-t border-[#d7d7d7] pt-[10px] px-[14px] pb-2">
        <div className="grid grid-cols-[1fr_40px] gap-2 items-center mb-[7px]">
          <input id="chatInput" className="h-[42px] border border-[#d4d4d4] text-[#101010] text-[12px] px-[10px] outline-none !rounded-none placeholder:text-[#97a0af] placeholder:font-medium" type="text" maxLength="1000" placeholder="Type a message..." />
          <button id="chatSend" className="w-10 h-[42px] border border-[#9ca3af] bg-[#9ca3af] text-[#f3f4f6] grid place-items-center text-[15px] !rounded-none" type="button" aria-label="Send message"><i
            className="fa-solid fa-arrow-right"></i></button>
        </div>
        <div className="flex justify-between items-center gap-[10px] text-[#111111] text-[11px] font-medium">
          <span>Ask me about programming, web dev, or tech!</span>
          <span id="chatCount">0/1000</span>
        </div>
      </div>
    </div>

    <button id="chatLauncher" className="fixed bottom-4 right-4 bg-black px-6 py-3 text-white font-medium tracking-[0.02em] shadow-[0_2px_6px_rgba(0,0,0,0.1)] transition-colors hover:bg-[#0a0a0a]/90 inline-flex items-center gap-2 rounded-full text-sm z-[60]" type="button" aria-label="Open chat">
      <svg className="w-5 h-5 animate-wiggle" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
      Chat with Ken
    </button>
  </>
)

export default Chatbot
