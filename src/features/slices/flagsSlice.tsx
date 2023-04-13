import { createSlice} from "@reduxjs/toolkit";
import { ApiCountry, useFetch } from "../../hooks/useFetch";

export interface FlagsState{
  data: ApiCountry[] | null;
  isLoading: boolean;
  error: Error | null;
}

const initialState = {
  data: null,
  isLoading: false,
  error: null
}


export const flagsSlice = createSlice({
  name: "flags",
  initialState,
  reducers: {
    setData:(state, action) => {
      state.data = action.payload;
    },
    
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },

    setError: (state, action ) => {
      state.error = action.payload
    },
  },


});

export const {setData, setIsLoading, setError} = flagsSlice.actions
