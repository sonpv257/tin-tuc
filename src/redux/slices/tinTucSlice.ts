import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTinTucHeThongApi } from "../../services/tinTucService";
import { TinTuc } from "@/components/TinTuc";

interface TinTucState {
  tinTucList: TinTuc[];
}

const initialState: TinTucState = {
  tinTucList: [],
};

export const fetchTinTucHeThong = createAsyncThunk(
  "tinTucHeThong/fetchTinTucHeThong",
  async () => {
    return await fetchTinTucHeThongApi();
  }
);

const tinTucHeThongSlice = createSlice({
  name: "tinTucHeThong",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTinTucHeThong.fulfilled, (state, action) => {
      state.tinTucList = action.payload;
    });
  },
});

export default tinTucHeThongSlice.reducer;
