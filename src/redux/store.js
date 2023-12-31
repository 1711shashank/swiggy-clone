import cartSlice from "./cartSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        cart: cartSlice
    }
});

export default store;




/**
 * create store 
 *      - configureStore() -RTK
 * 
 * provide store to the app 
 *      - <Provider store={store}/>
 * 
 * createSlice
 *      createSlice({
 *          name: 'cart',
 *          initialState: {},
 *          reducers:{ addItem: (state,action)=>{}
 *      })
 * 
 *      const  { addItem, removeItem, clearCart } = cartSlice.actions;
 *      export default cartSlice.reducer;
 * 
 * Put the slice into the store
 *      reducer: {
 *          cart: cartSlice, 
 *          user: userSlice
 *      } 
 */

