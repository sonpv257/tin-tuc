import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { useNotify } from "../ui/Notification";

interface SanPhamProps {
  product: any;
  handleAddToCart: (product: any) => void;
}

const formatPrice = (price: number) => {
  return price.toLocaleString("vi-VN");
};

const SanPham: React.FC<SanPhamProps> = ({ product, handleAddToCart }) => {
  const { showNotification } = useNotify();

  const handleAdd = () => {
    handleAddToCart(product);
    showNotification({
      message: `Đã thêm ${product.tieuDe} vào giỏ hàng!`,
      variant: "success",
    });
  };

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: 340 },
        position: "relative",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={product.anhDaiDien}
        alt={product.tieuDe}
      />
      <CardContent>
        <Typography
          variant="h6"
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {product.tieuDe}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            marginTop: 1,
            fontSize: { xs: "14px", sm: "16px" },
            fontWeight: "bold",
            color: "#ff5722",
            fontFamily: '"Roboto", sans-serif',
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)",
          }}
        >
          Giá: {formatPrice(product.gia)}đ
        </Typography>

        <Button variant="contained" sx={{ marginTop: 1 }} onClick={handleAdd}>
          Thêm vào giỏ hàng
        </Button>
      </CardContent>
    </Card>
  );
};

export default SanPham;
