'use client';

import { configureStore } from '@reduxjs/toolkit';
import danhMucReducer from './slices/danhMucSlice';
import tinTucHeThongReducer from './slices/tinTucSlice';
import chiTietTinTucReducer from './slices/chiTietSlice';

export const store = configureStore({
  reducer: {
    danhMuc: danhMucReducer,
    tinTucHeThong: tinTucHeThongReducer,
    chiTietTinTuc: chiTietTinTucReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
