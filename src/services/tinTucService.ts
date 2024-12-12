import axios from 'axios';  
import { TinTuc } from '@/components/TinTuc'; 

export const fetchTinTucHeThongApi = async (): Promise<TinTuc[]> => {  
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
};