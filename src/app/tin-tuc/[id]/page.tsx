"use client";

import { useParams } from "next/navigation";
import ChiTiet from "../../../components/ChiTiet";

const ChiTietTinTuc = () => {
  const params = useParams();
  const id = params?.id as string;

  return (
    <div>
      <ChiTiet id={id} />
    </div>
  );
};

export default ChiTietTinTuc;
