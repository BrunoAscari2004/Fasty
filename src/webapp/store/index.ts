import { configureStore } from "@reduxjs/toolkit";
import fastySlice from "../pages/Home/fastySlice";

const store = configureStore({
  reducer: {
    fasty: fastySlice,
  },
});
export type IAppDispatch = typeof store.dispatch;
export default store;
