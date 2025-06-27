import { Link, useNavigate } from 'react-router-dom'

type LinkButtonProps = {
  children: React.ReactNode
  to: string
}

function LinkButton({ children, to }: LinkButtonProps) {
  const navigate = useNavigate()
  const className =
    'text-sm text-secondary-400 hover:text-secondary-500 hover:underline'

  if (to === '-1')
    return (
      <button onClick={() => navigate(-1)} className={className}>
        {children}
      </button>
    )

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  )
}

export default LinkButton
