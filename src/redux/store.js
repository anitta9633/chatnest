import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice";
import lipstickReducer from "./lipstickSlice"

const store = configureStore({
    reducer: {
        userState:userReducer,
        lipstickState : lipstickReducer,

    }
});


export default store;