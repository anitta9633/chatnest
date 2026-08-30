import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: JSON.parse(localStorage.getItem("users")) || [],
    user: JSON.parse(localStorage.getItem("user")) || null,
    isAuthenticated:
        JSON.parse(localStorage.getItem("isAuthenticated")) || false,
};

const userSlice = createSlice({
    name: "userSlice",

    initialState,

    reducers: {

        userRegister: (state, action) => {
            state.users.push(action.payload);

            localStorage.setItem(
                "users",
                JSON.stringify(state.users)
            );
        },

        userLogin: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;

            localStorage.setItem(
                "user",
                JSON.stringify(state.user)
            );

            localStorage.setItem(
                "isAuthenticated",
                JSON.stringify(state.isAuthenticated)
            );
        },

        userRoleChange: (state, action) => {

            const userIndex = state.users.findIndex(
                (u) => u.id === action.payload.id
            );

            console.log("userIndex -------->", userIndex);

            if (userIndex !== -1) {
                state.users[userIndex].role =
                    action.payload.role;

                localStorage.setItem(
                    "users",
                    JSON.stringify(state.users)
                );
            }

            if (
                state.user &&
                action.payload.id === state.user.id
            ) {
                state.user.role = action.payload.role;

                localStorage.setItem(
                    "user",
                    JSON.stringify(state.user)
                );
            }
        },
    },
});

export const {
    userRegister,
    userLogin,
    userRoleChange,
} = userSlice.actions;

export default userSlice.reducer;