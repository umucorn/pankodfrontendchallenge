import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import rootReducer from "./reducers";

const store = configureStore({ reducer: rootReducer });

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: ReturnType<AppDispatch> = () => useDispatch<AppDispatch>();

export default store;
