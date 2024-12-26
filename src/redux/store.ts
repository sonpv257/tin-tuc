"use client";

import { configureStore } from "@reduxjs/toolkit";
import danhMucReducer from "./slices/danhMucSlice";
import tinTucHeThongReducer from "./slices/tinTucSlice";
import chiTietTinTucReducer from "./slices/chiTietTinTucSlice";
import sanphamReducer from "./slices/sanPhamSlice";

export const store = configureStore({
  reducer: {
    danhMuc: danhMucReducer,
    tinTucHeThong: tinTucHeThongReducer,
    chiTietTinTuc: chiTietTinTucReducer,
    sanPham: sanphamReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
