import { Cart } from './Cart'

export interface RootState {
  user: {
    username: string
    status: 'idle' | 'loading' | 'error'
    position: { latitude: number; longitude: number }
    address: string
    error: string
  }
  cart: {
    cart: Cart[]
  }
}
