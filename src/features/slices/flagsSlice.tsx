import { createSlice } from "@reduxjs/toolkit";
import { useFetch } from "../../hooks/useFetch";

async function fecthData() {
  const [countries] = useFetch("https://restcountries.com/v3.1/all");
  return countries
}

const initialState = fecthData();

export const flagsSlice = createSlice({
  name: "flags",
  initialState,
  reducers: {},
});

export default flagsSlice.reducer;
