import { useState, useEffect } from 'react'

const RATES_KEY = 'currency_rates'
const PREF_KEY  = 'selected_currency'

const FALLBACK = { USD: 1, TZS: 2650, KES: 129, UGX: 3750 }

export const CURRENCIES = ['USD', 'TZS', 'KES', 'UGX']

export function formatPrice(baseUsd, currency, rates, monthly = false) {
  if (!rates) return '...'
  const amount = Math.round(baseUsd * rates[currency])
  const n = amount.toLocaleString('en-US')
  const s = monthly ? '/mo' : ''
  switch (currency) {
    case 'USD': return `$${n}${s}`
    case 'TZS': return `TSH ${n}${s}`
    case 'KES': return `KES ${n}${s}`
    case 'UGX': return `UGX ${n}${s}`
    default:    return `$${n}${s}`
  }
}

export function useExchangeRates() {
  const [rates, setRates] = useState(() => {
    try {
      const c = sessionStorage.getItem(RATES_KEY)
      return c ? JSON.parse(c) : null
    } catch { return null }
  })
  const [isLive, setIsLive] = useState(() => {
    try { return !!sessionStorage.getItem(RATES_KEY) } catch { return false }
  })

  useEffect(() => {
    try { if (sessionStorage.getItem(RATES_KEY)) return } catch {}

    const apiKey = import.meta.env.VITE_EXCHANGE_RATE_API_KEY
    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`)
      .then(r => r.json())
      .then(data => {
        const { TZS, KES, UGX } = data.conversion_rates
        const r = { USD: 1, TZS, KES, UGX }
        try { sessionStorage.setItem(RATES_KEY, JSON.stringify(r)) } catch {}
        setRates(r)
        setIsLive(true)
      })
      .catch(() => {
        setRates(FALLBACK)
      })
  }, [])

  return { rates, isLive }
}

export function useCurrencyPref() {
  const [currency, setCurrency] = useState(() => {
    try { return sessionStorage.getItem(PREF_KEY) || 'USD' } catch { return 'USD' }
  })

  function select(c) {
    try { sessionStorage.setItem(PREF_KEY, c) } catch {}
    setCurrency(c)
  }

  return [currency, select]
}
