
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
    },
});

export const { addLipstick, editLipstick,deleteLipstick } = lipstickSlice.actions;

export default lipstickSlice.reducer;

