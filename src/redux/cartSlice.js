import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
})


export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;



// This is how export object look like
// cartSlice: {
//     actions: {
//         addItem, removeItem, clearCart
//     }
//     redicer: {
//         reducers
//     }
// }
