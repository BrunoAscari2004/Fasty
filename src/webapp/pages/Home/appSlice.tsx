import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ICarLap from "../../@types/ICarLap";

const fastySlice = createSlice({
  name: "app/fastySlice",
  initialState: {
    carLap: [] as ICarLap[],
  },
  reducers: {},
});
