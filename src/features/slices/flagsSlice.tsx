import {createSlice} from "@reduxjs/toolkit";
import { useFetch } from "../../hooks/useFetch";

const [countries] = useFetch("https://restcountries.com/v3.1/all"
);

export const flagsSlice = createSlice({
    name: "flags",
    initialState:{
        infoFlags: countries
    },
    reducers: {

    }
})

export default flagsSlice.reducer;
export const flagsInfo = (state:any) => state.flags.infoFlags;