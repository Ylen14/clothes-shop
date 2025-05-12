import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  name: string;
  color: string;
  size: string;
  quantity: number;
  price: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existing = state.items.find(
        item =>
          item.name === action.payload.name &&
          item.color === action.payload.color &&
          item.size === action.payload.size
      );

      if (existing) {
        existing.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<{ name: string; color: string; size: string }>) => {
      state.items = state.items.filter(
        item =>
          !(
            item.name === action.payload.name &&
            item.color === action.payload.color &&
            item.size === action.payload.size
          )
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
