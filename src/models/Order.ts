import { Cart } from './Cart'

export interface Order {
  id?: string
  name?: string
  address?: string
  customer?: string
  phone?: string
  status?: string
  priority?: boolean
  priorityPrice?: number
  orderPrice?: number
  estimatedDelivery?: string
  cart?: Cart[]
}
