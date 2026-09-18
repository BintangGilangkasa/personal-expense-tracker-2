import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice"
import transactionReducer from "../features/transactions/transactions"

const store = configureStore({
    reducer:{
        auth: authReducer,
        transactions: transactionReducer
    }
});

store.subscribe(() => {
    const state = store.getState();

    localStorage.setItem(
        "transactions",
        JSON.stringify(state.transactions.items)
    );
});

export default store;