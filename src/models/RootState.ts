import { Cart } from './Cart'

export interface RootState {
  user: {
    username: string
  }
  cart: {
    cart: Cart[]
  }
}
