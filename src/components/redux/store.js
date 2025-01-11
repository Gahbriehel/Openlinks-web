import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product/productSlice";
import cartSlice from "./cart/cartSlice";
import userSlice from "./userData/userSlice";


const store = configureStore({
    reducer: {
        product: productSlice,
        cart: cartSlice,
        user: userSlice,
    }
})

// store.subscribe("InitialState", console.log(store.getState()))

export default store;