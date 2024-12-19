"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { fetchChiTietTinTuc } from "../../redux/slices/chiTietTinTucSlice";
import DanhMuc from "@/components/danh-muc/DanhMuc";
import React from "react";
import {
  Box,
  Typography,
  Divider,
  Paper,
  CircularProgress,
  Alert,
} from "@mui/material";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

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
    <>
      <DanhMuc />
      {!chiTiet ? (
        <Box sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ maxWidth: 900, margin: "0 auto", padding: 2 }}>
          <Breadcrumbs />
          <Typography variant="h4" gutterBottom>
            {chiTiet.tieuDe}
          </Typography>

          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            <AccessTimeFilledIcon fontSize="small" />
            Ngày tạo: {new Date(chiTiet.ngayTao).toLocaleDateString()}
          </Typography>

          {chiTiet.tomTat && (
            <Paper
              sx={{ padding: 2, marginBottom: 3, backgroundColor: "#f9f9f9" }}
            >
              <Typography variant="body1">{chiTiet.tomTat}</Typography>
            </Paper>
          )}

          {chiTiet.tag && (
            <Typography variant="body2" sx={{ marginBottom: 2 }}>
              <strong>Tag:</strong> {chiTiet.tag}
            </Typography>
          )}

          {chiTiet.nguonTin && (
            <Typography variant="body2" sx={{ marginBottom: 2 }}>
              <strong>
                Nguồn tin:{" "}
                <a
                  href={chiTiet.nguonTin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {chiTiet.nguonTin}
                </a>
              </strong>
            </Typography>
          )}

          {chiTiet.tacGia && (
            <Typography variant="body2" sx={{ marginBottom: 2 }}>
              <strong>Tác giả:</strong> {chiTiet.tacGia}
            </Typography>
          )}

          {chiTiet.fileDinhKem && (
            <Typography variant="body2" sx={{ marginBottom: 2 }}>
              <strong>File đính kèm:</strong>{" "}
              <a
                href={chiTiet.fileDinhKem}
                target="_blank"
                rel="noopener noreferrer"
              >
                Tải xuống
              </a>
            </Typography>
          )}
          <Divider
            textAlign="left"
            sx={{
              borderColor: "blue",
              width: "40%",
              marginY: 3,
              "&::before, &::after": { borderColor: "secondary.main" },
            }}
          ></Divider>

          <Box
            sx={{
              marginBottom: 3,
              "& img": {
                maxWidth: "100%",
                height: "auto",
                display: "block",
                margin: "10px auto",
              },
            }}
            dangerouslySetInnerHTML={{ __html: chiTiet.noiDung }}
          ></Box>
        </Box>
      )}
    </>
  );
};

export default ChiTiet;
