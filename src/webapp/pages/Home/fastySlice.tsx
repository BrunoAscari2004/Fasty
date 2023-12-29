import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ICarLap from "../../@types/ICarLap";
import ICar from "../../@types/ICar";
import ICarForm from "../../@types/ICarForm";
import api from "../../services/api";

export const saveCar = createAsyncThunk(
  "app/fasty/saveCar",
  async (data: ICarForm) => {
    const response = await api.post<ICar[]>("/api/fasty/saveCar", data);
    return response.data;
  }
);

const fastySlice = createSlice({
  name: "app/fasty",
  initialState: {
    car: [] as ICar[],
    carLap: [] as ICarLap[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(saveCar.fulfilled, (state, action) => {
      state.car = action.payload;
    });
  },
});
export default fastySlice.reducer;
