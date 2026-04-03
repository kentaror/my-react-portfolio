export const applyDocumentTheme = (isDark) => {
  const root = document.documentElement

  root.classList.toggle('dark-theme', isDark)
  root.style.backgroundColor = isDark ? '#000000' : '#ffffff'
  root.style.colorScheme = isDark ? 'dark' : 'light'

  document.body.classList.toggle('dark-theme', isDark)
}

export const getSavedTheme = () => localStorage.getItem('portfolio-theme') === 'dark'
