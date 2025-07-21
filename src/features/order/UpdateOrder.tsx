import { LoaderFunctionArgs, useFetcher } from 'react-router-dom'
import { Order } from '../../models'
import { updateOrder } from '../../services/apiRestaurant'
import Button from '../../ui/Button'

function UpdateOrder({ order }: { order: Order }) {
  const fetcher = useFetcher()

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  )
}

export default UpdateOrder

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ params }: LoaderFunctionArgs) {
  const data = { priority: true }
  await updateOrder(params.orderId!, data)
  return null
}
