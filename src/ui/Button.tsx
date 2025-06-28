import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonProps = {
  children: ReactNode
  to?: string
  disabled?: boolean
  type?: ButtonType
}

const base =
  'disabled: inline-block cursor-not-allowed rounded-full bg-primary-500 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-primary-300 focus:bg-primary-300 focus:outline-none focus:ring focus:ring-primary-300 focus:ring-offset-2 disabled:cursor-not-allowed'

const styles = {
  primary: base + ' px-4 py-3 md:px-6 md:py-4',
  secondary:
    ' disabled: inline-block cursor-not-allowed rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 hover:text-stone-800 transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5',
  small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-sm',
}

type ButtonType = keyof typeof styles

function Button({ children, disabled, to, type }: ButtonProps) {
  if (to) {
    return (
      <Link to={to} className={styles[type || 'primary']}>
        {children}
      </Link>
    )
  }

  return (
    <button disabled={disabled} className={styles[type || 'primary']}>
      {children}
    </button>
  )
}

export default Button
