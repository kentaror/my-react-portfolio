import React from 'react'

const Chatbot = () => (
  <>
    <div id="chatPanel" className="fixed right-3 bottom-[76px] w-[340px] max-w-[calc(100vw-24px)] h-[540px] max-h-[calc(100vh-88px)] bg-white border border-zinc-100 shadow-2xl hidden flex-col z-[60] !rounded-none" aria-hidden="true">
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
          <span>Ken Lucero</span>
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

    <button id="chatLauncher" className="fixed right-3 bottom-3 h-11 w-[170px] px-4 border border-[#0a0a0a] bg-[#0a0a0a] text-white inline-flex items-center justify-center gap-2 text-sm font-semibold z-[60] !rounded-none" type="button">
      <svg className="chat-launcher-icon" width="24" height="24" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path d="M12 14C12 10.6863 14.6863 8 18 8H46C49.3137 8 52 10.6863 52 14V34C52 37.3137 49.3137 40 46 40H30L20 48V40H18C14.6863 40 12 37.3137 12 34V14Z"
          stroke="currentColor" strokeWidth="5" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="2.5" fill="currentColor" />
        <circle cx="32" cy="24" r="2.5" fill="currentColor" />
        <circle cx="40" cy="24" r="2.5" fill="currentColor" />
      </svg>
      Chat with Ken
    </button>
  </>
)

export default Chatbot
