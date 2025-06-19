import { Item } from './Item'

export interface OrderItem {
  item: Item
  isLoadingIngredients: boolean
  ingredients: string[]
}
