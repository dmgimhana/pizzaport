import { Cart } from './Cart'

export interface OrderItem {
  item: Cart
  isLoadingIngredients?: boolean
  ingredients?: string[]
  key?: number | string
}
