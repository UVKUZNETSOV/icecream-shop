import { createSlice } from "@reduxjs/toolkit";

type Item = {
  itemKey: number,
  title: string,
  image: string,
  cost: number,
  quantity: number
}

type CartState = {
  itemsInCart: Item[]
}

const initialState: CartState = {
  itemsInCart: localStorage.getItem("key") ? JSON.parse(String(localStorage.getItem("key"))) : []
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemInCart: (state, action) => {
      state.itemsInCart.push(action.payload)
    },
    removeItemFromCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(item => item.itemKey !== action.payload)
    }
  }
})

export const { addItemInCart, removeItemFromCart } = cartSlice.actions
export default cartSlice.reducer
