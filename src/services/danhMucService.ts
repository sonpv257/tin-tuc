import axios from "axios";
import { DanhMuc } from "@/components/DanhMuc";

export const fetchDanhMucApi = async (): Promise<DanhMuc[]> => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/DanhMucTinTuc/GetDanhSachDanhMucTinTuc`,
    {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_AUTH_TOKEN || "",
      },
      params: {
        loai_nguoi_dung: 4,
        skip: 0,
        limit: 30,
        ten_danh_muc: "",
      },
    }
  );
  return response.data.data as DanhMuc[];
};
