"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDanhMuc } from "../redux/slices/danhMucTinTucSlice";
import { RootState, AppDispatch } from "../redux/store";

export default function DanhMuc() {
  const dispatch = useDispatch<AppDispatch>();
  const { danhMucList, loading } = useSelector(
    (state: RootState) => state.danhMuc
  );

  useEffect(() => {
    if (danhMucList.length === 0) {
      dispatch(fetchDanhMuc());
    }
  }, [dispatch, danhMucList]);

  return (
    <div className="menu">
      <ul>
        {loading ? (
          <li>Loading...</li>
        ) : (
          danhMucList.map((danhmuc, index) => (
            <li key={`${danhmuc.id}-${index}`}>
              <a href="#">{danhmuc.tenDanhMuc}</a>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
