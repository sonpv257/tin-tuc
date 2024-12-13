import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchChiTietTinTucApi } from "../../services/chiTietService";
import { ChiTietTinTuc } from "@/components/ChiTiet";
import { AxiosError } from "axios";

interface ChiTietTinTucState {
  chiTiet: ChiTietTinTuc | null;
  error: string | null;
}

const initialState: ChiTietTinTucState = {
  chiTiet: null,
  error: null,
};

export const fetchChiTietTinTuc = createAsyncThunk(
  "chiTietTinTuc/fetchChiTietTinTuc",
  async (id: string, { rejectWithValue }) => {
    try {
      return await fetchChiTietTinTucApi(id);
    } catch (error: unknown) {
      const axiosError = error as AxiosError;
      return rejectWithValue(axiosError.response?.data || "Lỗi kết nối");
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
        state.error = null;
      })
      .addCase(fetchChiTietTinTuc.fulfilled, (state, action) => {
        state.chiTiet = action.payload;
      })
      .addCase(fetchChiTietTinTuc.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export default chiTietTinTucSlice.reducer;
