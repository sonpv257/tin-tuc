import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AxiosError } from "axios";

interface ChiTietTinTuc {
  id: string;
  tieuDe: string;
  tomTat: string;
  noiDung: string;
  anhDaiDien: string;
  ngayTao: string;
  tag: string;
  nguonTin: string;
  tacGia: string;
  fileDinhKem: string;
}

interface ChiTietTinTucState {
  chiTiet: ChiTietTinTuc | null;
  loading: boolean;
  error: string | null;
}

const initialState: ChiTietTinTucState = {
  chiTiet: null,
  loading: false,
  error: null,
};

export const fetchChiTietTinTuc = createAsyncThunk(
  "chiTietTinTuc/fetchChiTietTinTuc",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/TinTucHeThong/GetChiTietTinTuc`,
        {
          headers: {
            Authorization: process.env.NEXT_PUBLIC_AUTH_TOKEN || "",
          },
          params: { id },
        }
      );
      return response.data.data;
    } catch (error: unknown) {
      const AxiosError = error as AxiosError;
      return rejectWithValue(AxiosError.response?.data || "Lỗi kết nối");
    }
  }
);

const chiTietTinTucSlice = createSlice({
  name: "chiTietTinTuc",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChiTietTinTuc.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchChiTietTinTuc.fulfilled, (state, action) => {
        state.loading = false;
        state.chiTiet = action.payload;
      })
      .addCase(fetchChiTietTinTuc.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default chiTietTinTucSlice.reducer;
