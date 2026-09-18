import { createSlice } from '@reduxjs/toolkit';

const loadTransactions = () => {
  try {
    const saveTransactions = localStorage.getItem("transactions");

    if (!saveTransactions) {
      return[];
    }

    return JSON.parse(saveTransactions)
  }

    catch (error) {
     console.error(
      "Gagal membaca transaksi dari localstorage",
      error
    )

     return [];
  };
};


const transactionSlice = createSlice({
  name: 'transactions',
  initialState: {
    items: loadTransactions(),
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

// Export action creator (named export)
export const { addTransaction, updateTransaction, deleteTransaction } = transactionSlice.actions;

// Export reducer (DEFAULT EXPORT - Ini yang hilang di berkasmu)
export default transactionSlice.reducer;