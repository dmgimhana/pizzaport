import { OrderItem as OderItemModel } from '../../models/OrderItem'
import { formatCurrency } from '../../utils/helpers'

function OrderItem({ item }: OderItemModel) {
  const { quantity, name, totalPrice } = item

  return (
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  )
}

export default OrderItem
