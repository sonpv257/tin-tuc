import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSanPhamApi } from "../../services/san-pham/sanPhamService";
import { SanPham } from "@/model/san-pham/SanPham";

interface SanPhamState {
  sanPhamList: SanPham[];
}

const initialState: SanPhamState = {
  sanPhamList: [],
};

export const fetchSanPham = createAsyncThunk(
  "sanPham/fetchSanPham",
  async () => {
    const response = await fetchSanPhamApi();
    return response.map((sanPham: SanPham) => ({
      ...sanPham,
      gia: sanPham.gia || (Math.random() < 0.3 ? 100000 : Math.random() < 0.5 ? 200000 : 300000),
    }));
  }
);

const sanPhamSlice = createSlice({
  name: "sanPham",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSanPham.fulfilled, (state, action) => {
      state.sanPhamList = action.payload;
    });
  },
});

export default sanPhamSlice.reducer;
