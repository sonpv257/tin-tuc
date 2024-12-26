"use client";

import React from "react";
import DanhSachSanPham from "@/components/san-pham/DanhSachSanPham";
import DanhMuc from "@/components/danh-muc/DanhMuc";
import { Notification } from "@/components/ui/Notification";

const SanPhamPage = () => {
  return (
    <>
      <Notification>
        <DanhMuc />
        <DanhSachSanPham />
      </Notification>
    </>
  );
};

export default SanPhamPage;
