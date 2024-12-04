"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchTinTucHeThong } from "../redux/slices/tinTucHeThongSlice";
import { RootState, AppDispatch } from "../redux/store";

export default function DanhSachTinTuc() {
  const dispatch = useDispatch<AppDispatch>();
  const { tinTucList, loading } = useSelector(
    (state: RootState) => state.tinTucHeThong
  );

  useEffect(() => {
    if (tinTucList.length === 0 && !loading) {
      dispatch(fetchTinTucHeThong());
    }
  }, [dispatch, tinTucList, loading]);

  return (
    <div className="content-wrapper">
      <div className="container">
        {loading ? (
          <div>Loading...</div>
        ) : (
          tinTucList.length > 0 &&
          tinTucList.slice(0, 1).map((tintuc, index) => (
            <Link
              className="main-article"
              key={`${tintuc.id}-${index}`}
              href={`/tin-tuc/${tintuc.id}`}
            >
              <img src={tintuc.anhDaiDien} alt={tintuc.tieuDe} />
              <div className="main-content">
                <h2>{tintuc.tieuDe}</h2>
              </div>
            </Link>
          ))
        )}

        <div className="sidebar">
          {tinTucList.slice(1, 4).map((tintuc, index) => (
            <Link
              className="article"
              key={`${tintuc.id}-${index}`}
              href={`/tin-tuc/${tintuc.id}`}
            >
              <img src={tintuc.anhDaiDien} alt={tintuc.tieuDe} />
              <h3>{tintuc.tieuDe}</h3>
            </Link>
          ))}
        </div>
      </div>

      <div className="other-articles">
        {tinTucList.slice(4).map((tintuc, index) => (
          <Link
            className="article"
            key={`${tintuc.id}-${index}`}
            href={`/tin-tuc/${tintuc.id}`}
          >
            <img src={tintuc.anhDaiDien} alt={tintuc.tieuDe} />
            <h3>{tintuc.tieuDe}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
