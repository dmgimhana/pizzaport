export interface Order {
  id: string
  name: string
  status: string
  priority: boolean
  priorityPrice: number
  orderPrice: number
  estimatedDelivery: string
  cart: {
    pizzaId: number
    name: string
    quantity: number
    unitPrice: number
    totalPrice: number
  }[]
}
