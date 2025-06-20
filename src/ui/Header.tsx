import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder'

function Header() {
  return (
    <header>
      <Link to="/">PizzaPort Co.</Link>
      <SearchOrder />
      <p>PizzaPort</p>
    </header>
  )
}

export default Header
