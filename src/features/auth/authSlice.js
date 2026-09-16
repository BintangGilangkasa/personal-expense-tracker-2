import { createSlice } from '@reduxjs/toolkit';

// Fungsi helper yang dijamin TIDAK PERNAH mengembalikan undefined
const getInitialAuthState = () => {
  try {
    const isAuth = localStorage.getItem('isLoggedIn') === 'true';
    return {
      isAuthenticated: isAuth,
      user: isAuth ? { username: 'admin' } : null,
      error: null,
    };
  } catch (error) {
    // Fallback jika localStorage bermasalah
    return {
      isAuthenticated: false,
      user: null,
      error: null,
    };
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState: getInitialAuthState(), // Mengembalikan objek valid
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;
      if (username === 'admin' && password === 'admin123') {
        state.isAuthenticated = true;
        state.user = { username: 'admin' };
        state.error = null;
        localStorage.setItem('isLoggedIn', 'true');
      } else {
        state.error = 'Username atau password salah!';
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
      localStorage.removeItem('isLoggedIn');
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { login, logout, clearError } = authSlice.actions;
export default authSlice.reducer;