import { createContext, useContext, useState } from 'react'

const WhatsAppContext = createContext(null)

export function WhatsAppProvider({ children }) {
  const [message, setMessage] = useState(null)

  return (
    <WhatsAppContext.Provider value={{ message, setMessage }}>
      {children}
    </WhatsAppContext.Provider>
  )
}

export function useWhatsAppMessage() {
  return useContext(WhatsAppContext) ?? { message: null, setMessage: () => {} }
}
