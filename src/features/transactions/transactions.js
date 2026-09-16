import { createSlice } from '@reduxjs/toolkit';

const transactionSlice = createSlice({
  name: 'transactions',
  initialState: {
    items: [],
  },
  reducers: {
    addTransaction: (state, action) => {
      state.items.push(action.payload);
    },
    updateTransaction: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) state.items[index] = action.payload;
    },
    deleteTransaction: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

// 1. Export action creator (named export)
export const { addTransaction, updateTransaction, deleteTransaction } = transactionSlice.actions;

// 2. Export reducer (DEFAULT EXPORT - Ini yang hilang di berkasmu)
export default transactionSlice.reducer;