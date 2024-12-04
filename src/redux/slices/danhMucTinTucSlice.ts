import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface DanhMuc {
  id: string;
  tenDanhMuc: string; 
  thuTu: number;
  kickHoat: boolean;
  ngayTao: string;
}

interface DanhMucState {
  danhMucList: DanhMuc[];
  loading:boolean;
}

const initialState: DanhMucState = {
  danhMucList: [],
  loading: false,
};

export const fetchDanhMuc = createAsyncThunk(
  'danhMuc/fetchDanhMuc',
  async () =>{
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/DanhMucTinTuc/GetDanhSachDanhMucTinTuc`, {
      headers:{
        Authorization: process.env.NEXT_PUBLIC_AUTH_TOKEN || '',
      },
      params:{
        loai_nguoi_dung: 4,
        skip: 0,
        limit: 30,
        ten_danh_muc: '',
      },
    });
    return response.data.data as DanhMuc[];
  }
);

const danhMucSlice = createSlice({
  name: 'danhMuc',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDanhMuc.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDanhMuc.fulfilled, (state, action) => {
        state.danhMucList = [...state.danhMucList, ...action.payload];
        state.loading = false;
      })
      .addCase(fetchDanhMuc.rejected, (state) => {
       state.loading = false;
      });
  },
});

export default danhMucSlice.reducer;
