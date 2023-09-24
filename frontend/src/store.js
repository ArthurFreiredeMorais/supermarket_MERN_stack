import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlice';
import cartSliceReducer from './slices/cartSlice';

// Configure the Redux store
const store = configureStore({
  reducer: {
    // Use the reducer from the apiSlice and assign it to a key matching the apiSlice's reducerPath
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    // Concatenate the middleware from the apiSlice with the default middleware
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true, // Enable Redux DevTools extension in development mode
});

// Export the configured Redux store
export default store;