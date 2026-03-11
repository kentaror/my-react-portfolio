import { useEffect } from 'react'
import './App.css'
import Markup from './Markup'


function App() {
  useEffect(() => {
    document.body.classList.remove('dark-theme')

    const toggle = document.getElementById('themeToggle')
    const switchWrap = toggle?.closest('.switch')
    const profileLight = document.getElementById('profileLight')
    const profileDark = document.getElementById('profileDark')
    const body = document.body

    function applyTheme(isDark) {
      body.classList.toggle('dark-theme', isDark)
      if (toggle) {
        toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode')
        toggle.checked = isDark
      }
      if (profileLight && profileDark) {
        profileLight.classList.toggle('opacity-0', isDark)
        profileLight.classList.toggle('opacity-100', !isDark)
        profileDark.classList.toggle('opacity-100', isDark)
        profileDark.classList.toggle('opacity-0', !isDark)
      }
    }

    const savedTheme = localStorage.getItem('portfolio-theme')
    applyTheme(savedTheme === 'dark')

    const onThemeChange = () => {
      if (!toggle) {
        return
      }
      const isDark = toggle.checked
      applyTheme(isDark)
      localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light')
      switchWrap?.classList.add('is-ring')
    }
    toggle?.addEventListener('change', onThemeChange)

    const onDocumentClick = (event) => {
      if (!switchWrap) {
        return
      }
      if (switchWrap.contains(event.target)) {
        return
      }
      switchWrap.classList.remove('is-ring')
    }
    document.addEventListener('click', onDocumentClick)

    const recommendations = [
      {
        quote:
          "Ken was the most talented software engineer I've mentored in a long time. He's a fast learner, delivers quality output, and stays curious about new technologies.",
        name: 'Cris Lawrence Adrian Militante',
        role: 'ICT Director at GCM',
      },
      {
        quote:
          'Working with Ken was smooth and dependable. He consistently delivered clean UI work and understood feedback quickly.',
        name: 'Mikaela Santos',
        role: 'Product Designer at Virtual Wonders Web Solutions',
      },
      {
        quote:
          'Ken has strong initiative and ownership. He can translate ideas into practical features while keeping both design and performance in mind.',
        name: 'Jared Villanueva',
        role: 'Engineering Lead at Ryzn Clothing',
      },
      {
        quote:
          "I was impressed by Ken's consistency and professionalism. He communicates clearly, meets deadlines, and supports the team when it matters most.",
        name: 'Angela Reyes',
        role: 'Operations Manager at CBT Fest',
      },
    ]

    const recommendationQuoteEl = document.getElementById('recommendationQuote')
    const recommendationNameEl = document.getElementById('recommendationName')
    const recommendationRoleEl = document.getElementById('recommendationRole')
    const recommendationDotsEl = document.getElementById('recommendationDots')
    let recommendationIndex = 0

    function setRecommendationContent(index) {
      const current = recommendations[index]
      recommendationQuoteEl.textContent = `"${current.quote}"`
      recommendationNameEl.textContent = current.name
      recommendationRoleEl.textContent = current.role
    }

    function renderRecommendationDots(activeIndex) {
      recommendationDotsEl.innerHTML = recommendations
        .map((_, idx) => {
          const stateClass = idx === activeIndex ? 'is-active' : ''
          return `<span class="recommendation-dot ${stateClass}" aria-hidden="true"></span>`
        })
        .join('')
    }

    function animateRecommendationChange(nextIndex) {
      const contentEls = [recommendationQuoteEl, recommendationNameEl, recommendationRoleEl]
      contentEls.forEach((el) => el.classList.add('recommendation-content', 'is-transitioning'))

      setTimeout(() => {
        setRecommendationContent(nextIndex)
        contentEls.forEach((el) => el.classList.remove('is-transitioning'))
        renderRecommendationDots(nextIndex)
      }, 430)
    }

    let recommendationsIntervalId
    if (recommendationQuoteEl && recommendationNameEl && recommendationRoleEl && recommendationDotsEl) {
      ;[recommendationQuoteEl, recommendationNameEl, recommendationRoleEl].forEach((el) =>
        el.classList.add('recommendation-content'),
      )
      setRecommendationContent(recommendationIndex)
      renderRecommendationDots(recommendationIndex)

      recommendationsIntervalId = setInterval(() => {
        recommendationIndex = (recommendationIndex + 1) % recommendations.length
        animateRecommendationChange(recommendationIndex)
      }, 4500)
    }

    const galleryImages = Array.from(document.querySelectorAll('.js-gallery-image'))
    const gallerySection = document.getElementById('portfolioGallery')
    const galleryDisplayFrames = gallerySection ? Array.from(gallerySection.querySelectorAll('.js-gallery-frame')) : []
    const galleryTrack = document.getElementById('galleryTrack')
    const galleryPrevBtn = document.getElementById('galleryPrevBtn')
    const galleryNextBtn = document.getElementById('galleryNextBtn')
    const lightbox = document.getElementById('portfolioLightbox')
    const lightboxImage = document.getElementById('lightboxImage')
    const lightboxClose = document.getElementById('lightboxClose')
    const lightboxPrev = document.getElementById('lightboxPrev')
    const lightboxNext = document.getElementById('lightboxNext')
    const lightboxCounter = document.getElementById('lightboxCounter')
    let activeGalleryIndex = 0

    function showLightboxImage(index) {
      const image = galleryImages[index]
      if (!image) {
        return
      }
      lightboxImage.src = image.src
      lightboxImage.alt = image.alt || 'Gallery preview'
      lightboxCounter.textContent = `${index + 1} / ${galleryImages.length}`
    }

    function openLightbox(index) {
      activeGalleryIndex = index
      showLightboxImage(activeGalleryIndex)
      lightbox.classList.remove('hidden')
      lightbox.classList.add('flex')
      lightbox.setAttribute('aria-hidden', 'false')
      document.body.style.overflow = 'hidden'
    }

    function closeLightbox() {
      lightbox.classList.add('hidden')
      lightbox.classList.remove('flex')
      lightbox.setAttribute('aria-hidden', 'true')
      document.body.style.overflow = ''
    }

    function moveLightbox(direction) {
      activeGalleryIndex = (activeGalleryIndex + direction + galleryImages.length) % galleryImages.length
      showLightboxImage(activeGalleryIndex)
    }

    const galleryCleanup = []
    const onLightboxBackdropClick = (event) => {
      if (event.target === lightbox) {
        closeLightbox()
      }
    }

    const onLightboxKeydown = (event) => {
      if (lightbox.classList.contains('hidden')) {
        return
      }
      if (event.key === 'Escape') {
        closeLightbox()
      }
      if (event.key === 'ArrowLeft') {
        moveLightbox(-1)
      }
      if (event.key === 'ArrowRight') {
        moveLightbox(1)
      }
    }

    const onPrevClick = (event) => {
      event.stopPropagation()
      moveLightbox(-1)
    }

    const onNextClick = (event) => {
      event.stopPropagation()
      moveLightbox(1)
    }

    let activeGallerySlideIndex = 0
    const isMobileGalleryView = () => window.innerWidth < 768

    function updateGalleryNav(isMobile) {
      if (!galleryPrevBtn || !galleryNextBtn) {
        return
      }
      if (!isMobile) {
        galleryPrevBtn.disabled = false
        galleryNextBtn.disabled = false
        galleryPrevBtn.setAttribute('aria-disabled', 'false')
        galleryNextBtn.setAttribute('aria-disabled', 'false')
        galleryPrevBtn.classList.remove('opacity-40', 'pointer-events-none')
        galleryNextBtn.classList.remove('opacity-40', 'pointer-events-none')
        return
      }
      const maxIndex = Math.max(galleryDisplayFrames.length - 1, 0)
      const atStart = activeGallerySlideIndex <= 0
      const atEnd = activeGallerySlideIndex >= maxIndex
      galleryPrevBtn.disabled = atStart
      galleryNextBtn.disabled = atEnd
      galleryPrevBtn.setAttribute('aria-disabled', atStart ? 'true' : 'false')
      galleryNextBtn.setAttribute('aria-disabled', atEnd ? 'true' : 'false')
      galleryPrevBtn.classList.toggle('opacity-40', atStart)
      galleryPrevBtn.classList.toggle('pointer-events-none', atStart)
      galleryNextBtn.classList.toggle('opacity-40', atEnd)
      galleryNextBtn.classList.toggle('pointer-events-none', atEnd)
    }

    function renderGallerySlides(shouldAnimate = false) {
      if (!galleryDisplayFrames.length) {
        return
      }
      const isMobile = isMobileGalleryView()
      galleryDisplayFrames.forEach((frame) => frame.classList.remove('hidden'))
      if (!galleryTrack) {
        return
      }
      if (isMobile) {
        galleryTrack.style.transform = `translate3d(-${activeGallerySlideIndex * 100}%, 0, 0)`
        galleryTrack.style.transition = shouldAnimate
          ? 'transform 520ms cubic-bezier(0.22, 1, 0.36, 1)'
          : 'none'
      } else {
        galleryTrack.style.transform = ''
        galleryTrack.style.transition = ''
      }
      updateGalleryNav(isMobile)
    }

    function moveGallerySlides(direction) {
      if (!galleryDisplayFrames.length) {
        return
      }
      const maxIndex = Math.max(galleryDisplayFrames.length - 1, 0)
      const nextIndex = activeGallerySlideIndex + direction
      activeGallerySlideIndex = Math.min(Math.max(nextIndex, 0), maxIndex)
      renderGallerySlides(true)
    }

    const onGalleryPrevClick = (event) => {
      event.preventDefault()
      event.stopPropagation()
      moveGallerySlides(-1)
    }

    const onGalleryNextClick = (event) => {
      event.preventDefault()
      event.stopPropagation()
      moveGallerySlides(1)
    }

    const onGalleryResize = () => renderGallerySlides(false)
    if (galleryDisplayFrames.length) {
      renderGallerySlides(false)
      window.addEventListener('resize', onGalleryResize)
    }

    if (galleryPrevBtn && galleryNextBtn) {
      galleryPrevBtn.addEventListener('click', onGalleryPrevClick)
      galleryNextBtn.addEventListener('click', onGalleryNextClick)
    }

    if (galleryImages.length && lightbox && lightboxImage && lightboxClose && lightboxPrev && lightboxNext && lightboxCounter) {
      galleryImages.forEach((image, index) => {
        const onClick = () => openLightbox(index)
        image.addEventListener('click', onClick)
        galleryCleanup.push(() => image.removeEventListener('click', onClick))
      })

      lightboxClose.addEventListener('click', closeLightbox)
      lightboxPrev.addEventListener('click', onPrevClick)
      lightboxNext.addEventListener('click', onNextClick)
      lightbox.addEventListener('click', onLightboxBackdropClick)
      document.addEventListener('keydown', onLightboxKeydown)
    }

    const chatPanel = document.getElementById('chatPanel')
    const chatLauncher = document.getElementById('chatLauncher')
    const chatClose = document.getElementById('chatClose')
    const chatMessages = document.getElementById('chatMessages')
    const chatInput = document.getElementById('chatInput')
    const chatSend = document.getElementById('chatSend')
    const chatCount = document.getElementById('chatCount')
    let typingIndicatorEl = null
    const chatApiCandidates = Array.from(
      new Set(
        [
          import.meta.env.VITE_CHAT_API_URL,
          import.meta.env.DEV ? 'http://localhost:5050/chat' : null,
          import.meta.env.DEV ? 'http://localhost:5000/chat' : null,
          '/api/chat',
        ].filter(Boolean),
      ),
    )
    const resumeModal = document.getElementById('resumeModal')
    const openResumeModalBtn = document.getElementById('openResumeModalBtn')
    const closeResumeModalBtn = document.getElementById('closeResumeModalBtn')

    function setResumeModalOpen(isOpen) {
      if (!resumeModal) {
        return
      }
      resumeModal.classList.toggle('hidden', !isOpen)
      resumeModal.classList.toggle('flex', isOpen)
      resumeModal.setAttribute('aria-hidden', isOpen ? 'false' : 'true')
      document.body.style.overflow = isOpen ? 'hidden' : ''
    }

    const onOpenResumeModal = () => setResumeModalOpen(true)
    const onCloseResumeModal = () => setResumeModalOpen(false)
    const onResumeModalBackdropClick = (event) => {
      if (event.target === resumeModal) {
        setResumeModalOpen(false)
      }
    }
    const onResumeModalEscape = (event) => {
      if (event.key === 'Escape' && resumeModal && !resumeModal.classList.contains('hidden')) {
        setResumeModalOpen(false)
      }
    }

    function setChatOpen(isOpen) {
      chatPanel.classList.toggle('hidden', !isOpen)
      chatPanel.classList.toggle('flex', isOpen)
      chatPanel.setAttribute('aria-hidden', isOpen ? 'false' : 'true')
      chatLauncher.classList.toggle('hidden', isOpen)
      if (isOpen) {
        chatInput.focus()
      }
    }

    function createAssistantHeader() {
      const assistantHeader = document.createElement('div')
      assistantHeader.className = 'flex items-center gap-[10px] mb-[10px] text-[#161616] text-[12px] font-semibold'
      assistantHeader.innerHTML =
        '<img src="pfp2.png" alt="Ken profile small" class="w-[22px] h-[22px] object-cover !rounded-none" /><span>Ken Lucero</span>'
      return assistantHeader
    }

    function showTypingIndicator() {
      if (typingIndicatorEl) {
        return
      }
      const assistantWrap = document.createElement('div')
      assistantWrap.className = 'mb-3'
      assistantWrap.setAttribute('data-chat-typing', 'true')

      const bubble = document.createElement('div')
      bubble.className =
        'w-fit max-w-[85%] bg-gray-100 text-[#141414] text-[13px] leading-[1.35] py-3 px-[11px] !rounded-none break-words chat-typing-dots'
      bubble.setAttribute('aria-label', 'Assistant is typing')
      bubble.innerHTML = '<span></span><span></span><span></span>'

      assistantWrap.appendChild(createAssistantHeader())
      assistantWrap.appendChild(bubble)
      chatMessages.appendChild(assistantWrap)
      chatMessages.scrollTop = chatMessages.scrollHeight
      typingIndicatorEl = assistantWrap
    }

    function hideTypingIndicator() {
      if (!typingIndicatorEl) {
        return
      }
      typingIndicatorEl.remove()
      typingIndicatorEl = null
    }

    function appendBubble(message, isUser) {
      if (isUser) {
        const bubble = document.createElement('div')
        bubble.className =
          'w-fit max-w-[85%] bg-black text-white text-[13px] leading-[1.35] py-3 px-[11px] !rounded-none mb-3 break-words'
        bubble.classList.add('ml-auto', 'bg-black', 'text-white')
        bubble.textContent = message
        chatMessages.appendChild(bubble)
      } else {
        const sanitizedMessage = String(message).replace(/\*/g, '')
        const assistantWrap = document.createElement('div')
        assistantWrap.className = 'mb-3'

        const bubble = document.createElement('div')
        bubble.className =
          'w-fit max-w-[85%] bg-gray-100 text-[#141414] text-[13px] leading-[1.35] py-3 px-[11px] !rounded-none break-words'
        bubble.textContent = sanitizedMessage

        assistantWrap.appendChild(createAssistantHeader())
        assistantWrap.appendChild(bubble)
        chatMessages.appendChild(assistantWrap)
      }

      chatMessages.scrollTop = chatMessages.scrollHeight
    }

    function extractReplyText(payload, message) {
      if (typeof payload?.reply === 'string' && payload.reply.trim()) {
        return payload.reply.trim()
      }

      const generated =
        typeof payload?.generated_text === 'string'
          ? payload.generated_text
          : Array.isArray(payload) && typeof payload[0]?.generated_text === 'string'
            ? payload[0].generated_text
            : ''
      if (!generated) {
        return ''
      }

      const trimmed = generated.trim()
      if (trimmed.toLowerCase().startsWith(message.toLowerCase())) {
        return trimmed.slice(message.length).trim()
      }
      return trimmed
    }

    async function requestAssistantReply(url, message) {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      })

      if (!response.ok) {
        throw new Error(`Chat request failed with status ${response.status}`)
      }

      const payload = await response.json()
      const reply = extractReplyText(payload, message)
      if (!reply) {
        throw new Error('No AI reply returned')
      }
      return reply
    }

    async function getAssistantReply(message) {
      let lastError
      for (const url of chatApiCandidates) {
        try {
          return await requestAssistantReply(url, message)
        } catch (error) {
          lastError = error
        }
      }
      throw lastError || new Error('Chat API unavailable')
    }

    async function sendMessage() {
      const message = chatInput.value.trim()
      if (!message) {
        return
      }
      appendBubble(message, true)
      chatInput.value = ''
      chatCount.textContent = '0/1000'
      updateChatSendState()
      showTypingIndicator()

      try {
        const reply = await getAssistantReply(message)
        hideTypingIndicator()
        appendBubble(reply, false)
      } catch {
        hideTypingIndicator()
        appendBubble('AI assistant is unavailable right now. Please try again in a moment.', false)
      }
    }

    const openChat = () => setChatOpen(true)
    const closeChat = () => setChatOpen(false)

    const updateChatSendState = () => {
      const hasMessage = chatInput.value.trim().length > 0
      chatSend.disabled = !hasMessage
      chatSend.classList.toggle('bg-[#0a0a0a]', hasMessage)
      chatSend.classList.toggle('border-[#0a0a0a]', hasMessage)
      chatSend.classList.toggle('bg-[#9ca3af]', !hasMessage)
      chatSend.classList.toggle('border-[#9ca3af]', !hasMessage)
    }

    const onChatInput = () => {
      chatCount.textContent = `${chatInput.value.length}/1000`
      updateChatSendState()
    }

    const onChatInputKeydown = (event) => {
      if (event.key === 'Enter') {
        sendMessage()
      }
    }

    const onEscapeCloseChat = (event) => {
      if (event.key === 'Escape' && !chatPanel.classList.contains('hidden')) {
        setChatOpen(false)
      }
    }

    if (chatPanel && chatLauncher && chatClose && chatMessages && chatInput && chatSend && chatCount) {
      updateChatSendState()
      chatLauncher.addEventListener('click', openChat)
      chatClose.addEventListener('click', closeChat)
      chatSend.addEventListener('click', sendMessage)
      chatInput.addEventListener('input', onChatInput)
      chatInput.addEventListener('keydown', onChatInputKeydown)
      document.addEventListener('keydown', onEscapeCloseChat)
    }

    if (resumeModal && openResumeModalBtn && closeResumeModalBtn) {
      openResumeModalBtn.addEventListener('click', onOpenResumeModal)
      closeResumeModalBtn.addEventListener('click', onCloseResumeModal)
      resumeModal.addEventListener('click', onResumeModalBackdropClick)
      document.addEventListener('keydown', onResumeModalEscape)
    }

    return () => {
      document.body.classList.remove('dark-theme')
      document.body.style.overflow = ''
      toggle?.removeEventListener('change', onThemeChange)
      document.removeEventListener('click', onDocumentClick)
      if (recommendationsIntervalId) {
        clearInterval(recommendationsIntervalId)
      }
      if (lightbox) {
        lightbox.removeEventListener('click', onLightboxBackdropClick)
      }
      if (lightboxClose) {
        lightboxClose.removeEventListener('click', closeLightbox)
      }
      if (lightboxPrev) {
        lightboxPrev.removeEventListener('click', onPrevClick)
      }
      if (lightboxNext) {
        lightboxNext.removeEventListener('click', onNextClick)
      }
      if (galleryPrevBtn) {
        galleryPrevBtn.removeEventListener('click', onGalleryPrevClick)
      }
      if (galleryNextBtn) {
        galleryNextBtn.removeEventListener('click', onGalleryNextClick)
      }
      window.removeEventListener('resize', onGalleryResize)
      document.removeEventListener('keydown', onLightboxKeydown)
      galleryCleanup.forEach((fn) => fn())
      if (chatSend) {
        chatSend.removeEventListener('click', sendMessage)
      }
      if (chatInput) {
        chatInput.removeEventListener('input', onChatInput)
        chatInput.removeEventListener('keydown', onChatInputKeydown)
      }
      if (chatClose) {
        chatClose.removeEventListener('click', closeChat)
      }
      if (chatLauncher) {
        chatLauncher.removeEventListener('click', openChat)
      }
      document.removeEventListener('keydown', onEscapeCloseChat)
      if (openResumeModalBtn) {
        openResumeModalBtn.removeEventListener('click', onOpenResumeModal)
      }
      if (closeResumeModalBtn) {
        closeResumeModalBtn.removeEventListener('click', onCloseResumeModal)
      }
      if (resumeModal) {
        resumeModal.removeEventListener('click', onResumeModalBackdropClick)
      }
      document.removeEventListener('keydown', onResumeModalEscape)
      hideTypingIndicator()
    }
  }, [])

  return (
    <Markup />
  )
}

export default App
