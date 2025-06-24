import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder'

function Header() {
  return (
    <header className="bg-primary-500">
      <Link to="/">PizzaPort Co.</Link>
      <SearchOrder />
      <p>PizzaPort</p>
    </header>
  )
}

export default Header
