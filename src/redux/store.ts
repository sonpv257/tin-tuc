'use client';

import { configureStore } from '@reduxjs/toolkit';
import danhMucReducer from './slices/danhMucTinTucSlice';
import tinTucHeThongReducer from './slices/tinTucHeThongSlice';
import chiTietTinTucReducer from './slices/chiTietTinTucSlice';

export const store = configureStore({
  reducer: {
    danhMuc: danhMucReducer,
    tinTucHeThong: tinTucHeThongReducer,
    chiTietTinTuc: chiTietTinTucReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
