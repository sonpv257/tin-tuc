"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { fetchChiTietTinTuc } from "../redux/slices/chiTietTinTucSlice";
import DanhMuc from "@/components/Menu";

interface ChiTietProps {
  id: string;
}

const ChiTiet = ({ id }: ChiTietProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { chiTiet } = useSelector((state: RootState) => state.chiTietTinTuc);

  useEffect(() => {
    if (id) {
      dispatch(fetchChiTietTinTuc(id));
    }
  }, [dispatch, id]);

  return (
    <div>
      <DanhMuc />
      {chiTiet && (
        <div className="detail">
          <h1>{chiTiet.tieuDe}</h1>
          <img src={chiTiet.anhDaiDien} alt={chiTiet.tieuDe} />
          {chiTiet.ngayTao && (
            <p>
              <strong>Ngày tạo:</strong>{" "}
              {new Date(chiTiet.ngayTao).toLocaleDateString()}
            </p>
          )}
          {chiTiet.tacGia && (
            <p>
              <strong>Tác giả:</strong> {chiTiet.tacGia}
            </p>
          )}
          {chiTiet.nguonTin && (
            <p>
              <strong>Nguồn tin:</strong> {chiTiet.nguonTin}
            </p>
          )}
          {chiTiet.tag && (
            <p>
              <strong>Tag:</strong> {chiTiet.tag}
            </p>
          )}
          <h3>{chiTiet.tomTat}</h3>
          <hr />
          <div
            className="detail-content"
            dangerouslySetInnerHTML={{ __html: chiTiet.noiDung }}
          />
          {chiTiet.fileDinhKem && chiTiet.fileDinhKem.trim() !== "" && (
            <div className="attachments">
              <h4>Tệp đính kèm:</h4>
              <a
                href={chiTiet.fileDinhKem}
                target="_blank"
                rel="noopener noreferrer"
              >
                Tải về
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChiTiet;
