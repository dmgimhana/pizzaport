import { createSlice } from '@reduxjs/toolkit'
import { Cart, RootState } from '../../models'

const initialState: {
  cart: Cart[]
} = {
  cart: [],
  //   cart: [
  //     {
  //       pizzaId: 101,
  //       name: 'Sri Lankan Delight',
  //       quantity: 1,
  //       unitPrice: 16,
  //       totalPrice: 32,
  //     },
  //   ],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload)
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload)
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload)!
      item.quantity++
      item.unitPrice * item.quantity
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload)!
      item.quantity--
      item.unitPrice * item.quantity
    },
    clearCart(state) {
      state.cart = []
    },
  },
})

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions

export default cartSlice.reducer

export const getTotalCartQuantity = (state: RootState) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)

export const getTotalCartPrice = (state: RootState) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0)
