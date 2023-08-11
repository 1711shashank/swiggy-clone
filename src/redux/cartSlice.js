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
        removeItem: (state, action) => {
            const idToRemove = action.payload.id;
            state.items = state.items.filter((item) => item.id !== idToRemove);
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
