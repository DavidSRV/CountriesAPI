import { configureStore } from "@reduxjs/toolkit";
import flagsReducer from "../features/slices/flagsSlice"


export const store = configureStore({
    reducer: {
        flags: flagsReducer
    }
});

