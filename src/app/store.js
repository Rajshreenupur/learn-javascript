import {configureStore} from "@reduxjs/toolkit";
import { useReducer } from "react";
import useReducer from "../features/userSlice";

export default configureStore({
    reducer: {
        user:useReducer,
    },
})