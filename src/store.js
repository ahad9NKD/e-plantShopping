import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

// Create the Redux store and assign cartReducer to the cart state slice.
const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;
