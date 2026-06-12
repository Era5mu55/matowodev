import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('lang') || 'en' } catch { return 'en' }
  })

  function toggleLang() {
    const next = lang === 'en' ? 'sw' : 'en'
    try { localStorage.setItem('lang', next) } catch {}
    setLang(next)
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) return { lang: 'en', toggleLang: () => {} }
  return ctx
}
