import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface TinTuc {
  id: string;
  tieuDe: string;
  tomTat: string;
  anhDaiDien: string;
  nguoiTao: string;
  ngayTao: string;
  urlChiTiet: string;
  fileDinhKem: string;
}

interface TinTucState {
  tinTucList: TinTuc[];
  loading: boolean;
}

const initialState: TinTucState = {
  tinTucList: [],
  loading: false,
};

export const fetchTinTucHeThong = createAsyncThunk(
  'tinTucHeThong/fetchTinTucHeThong',
  async  () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/TinTucHeThong/GetDanhSachTinTuc`, {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_AUTH_TOKEN || '',
      },
      params: {
        cap_don_vi: 4,
        loai_nguoi_dung: 4,
        ma_so: 'shn',
        ma_phong: '',
        skip: 0, 
        limit: 30, 
        tieu_de: '',
        danh_muc_tin_tuc_id: '',
      },
    });
    return response.data.data as TinTuc[];
  }
);


const tinTucHeThongSlice = createSlice({
  name: 'tinTucHeThong',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTinTucHeThong.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTinTucHeThong.fulfilled, (state, action) => {
        state.tinTucList = action.payload; 
        state.loading = false;
      })      
      .addCase(fetchTinTucHeThong.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default tinTucHeThongSlice.reducer;
