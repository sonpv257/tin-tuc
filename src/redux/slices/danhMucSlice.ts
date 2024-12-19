import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDanhMucApi } from "../../services/danh-muc/danhMucService";
import { DanhMuc } from "@/model/danh-muc/DanhMuc";

interface DanhMucState {
  danhMucList: DanhMuc[];
}

const initialState: DanhMucState = {
  danhMucList: [],
};

export const fetchDanhMuc = createAsyncThunk(
  "danhMuc/fetchDanhMuc",
  async () => {
    return await fetchDanhMucApi();
  }
);

const danhMucSlice = createSlice({
  name: "danhMuc",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDanhMuc.fulfilled, (state, action) => {
      state.danhMucList = [...state.danhMucList, ...action.payload];
    });
  },
});

export default danhMucSlice.reducer;
