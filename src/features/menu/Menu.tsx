import { useLoaderData } from 'react-router-dom'
import { Pizza } from '../../models'
import { getMenu } from '../../services/apiRestaurant'
import MenuItem from './MenuItem'

function Menu() {
  const menu = useLoaderData() as Pizza[]
  console.log('Menu data:', menu)

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const menu = await getMenu()
  return menu
}

export default Menu
