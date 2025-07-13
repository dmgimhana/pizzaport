export function formatCurrency(value?: number | null) {
  if (!value) {
    return ''
  }

  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'EUR',
  }).format(value)
}

export function formatDate(dateStr?: string | null) {
  return new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(dateStr || new Date()))
}

export function calcMinutesLeft(dateStr?: string | null) {
  const d1 = new Date().getTime()
  const d2 = new Date(dateStr || new Date()).getTime()
  return Math.round((d2 - d1) / 60000)
}
