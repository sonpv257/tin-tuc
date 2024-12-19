import DanhSachTinTuc from "../components/tin-tuc/TinTuc";
import DanhMuc from "../components/danh-muc/DanhMuc";

export default function Home() {
  return (
    <div>
      <DanhMuc />
      <DanhSachTinTuc />
    </div>
  );
}
