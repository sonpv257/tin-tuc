import axios from "axios";
import { ChiTietTinTuc } from "@/components/ChiTiet";

export const fetchChiTietTinTucApi = async (
  id: string
): Promise<ChiTietTinTuc> => {
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
};
