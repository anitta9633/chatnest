
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lipsticks: JSON.parse(localStorage.getItem("lipsticks")) || [],
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
};

const lipstickSlice = createSlice({
    name: "lipstickSlice",

    initialState,

    reducers: {
        // Add Item
        addLipstick: (state, action) => {
            state.lipsticks.push(action.payload);

            localStorage.setItem(
                "lipsticks",
                JSON.stringify(state.lipsticks)
            );
        },

        // Edit Item
        editLipstick: (state, action) => {
            const lipstickIndex = state.lipsticks.findIndex(
                (li) => li.id === action.payload.id
            );

            if (lipstickIndex !== -1) {
                state.lipsticks[lipstickIndex] = action.payload;
            }

            localStorage.setItem(
                "lipsticks",
                JSON.stringify(state.lipsticks)
            );
        },
         deleteLipstick: (state, action) => {
            const lipstickIndex = state.lipsticks.findIndex(
                (li) => li.id === action.payload
            );
console.log("lipstickIndex-------->",lipstickIndex)
            if (lipstickIndex !== -1) {
                state.lipsticks.splice(lipstickIndex, 1)

            }

            localStorage.setItem(
                "lipsticks",
                JSON.stringify(state.lipsticks)
            );
        },
        addToCart: (state, action) => { 
            const lipstickIndex = state.cartItems.findIndex((item)=>item.id === action.payload)
            if(lipstickIndex !== -1){
                state.cartItems[lipstickIndex].quantity++;
            }else{
                state.cartItems.push({...action.payload, quantity:1});
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems) );
        },
        incrementItemQuantity: (state, action) => { 
            const lipstickIndex = state.cartItems.findIndex((item)=>item.id === action.payload)
            if(lipstickIndex !== -1){

                state.cartItems[lipstickIndex].quantity++;
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems) );
           
            }

           
        },
         decrementItemQuantity: (state, action) => { 
            const lipstickIndex = state.cartItems.findIndex((item)=>item.id === action.payload)
            if(lipstickIndex !== -1){

                state.cartItems[lipstickIndex].quantity--;
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems) );
           
            }

           
        },
         removeCartItem: (state, action) => { 
            const lipstickIndex = state.cartItems.findIndex((item)=>item.id === action.payload)
            if(lipstickIndex !== -1){

                state.cartItems.splice(lipstickIndex, 1);
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems) );
           
            }

           
        },

    },
});

export const { addLipstick, editLipstick,deleteLipstick,addToCart ,incrementItemQuantity,decrementItemQuantity ,removeCartItem} = lipstickSlice.actions;

export default lipstickSlice.reducer;

