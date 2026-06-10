import { useState, useEffect } from 'react'

const RATES_KEY = 'currency_rates'
const PREF_KEY  = 'selected_currency'
const TTL_MS    = 24 * 60 * 60 * 1000 // 24 hours

const FALLBACK = { USD: 1, TZS: 2650, KES: 129, UGX: 3750 }

export const CURRENCIES = ['USD', 'TZS', 'KES', 'UGX']

function loadCached() {
  try {
    const raw = localStorage.getItem(RATES_KEY)
    if (!raw) return null
    const { rates, ts } = JSON.parse(raw)
    if (Date.now() - ts > TTL_MS) return null // stale
    return rates
  } catch { return null }
}

function saveCache(rates) {
  try {
    localStorage.setItem(RATES_KEY, JSON.stringify({ rates, ts: Date.now() }))
  } catch {}
}

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
  const [rates, setRates] = useState(() => loadCached())
  const [isLive, setIsLive] = useState(() => !!loadCached())

  useEffect(() => {
    if (loadCached()) return // fresh cache exists, skip fetch

    const apiKey = import.meta.env.VITE_EXCHANGE_RATE_API_KEY
    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`)
      .then(r => r.json())
      .then(data => {
        const { TZS, KES, UGX } = data.conversion_rates
        const r = { USD: 1, TZS, KES, UGX }
        saveCache(r)
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
    try { return localStorage.getItem(PREF_KEY) || 'USD' } catch { return 'USD' }
  })

  function select(c) {
    try { localStorage.setItem(PREF_KEY, c) } catch {}
    setCurrency(c)
  }

  return [currency, select]
}
