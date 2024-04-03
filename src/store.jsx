import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";

let store = configureStore({
    reducer : {
        User : userReducer,
    }
});


export default store;