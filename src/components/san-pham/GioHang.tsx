import React from "react";
import {
  Modal,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TextField,
  CardMedia,
} from "@mui/material";
import { useNotify } from "../ui/Notification";

interface GioHangProps {
  open: boolean;
  onClose: () => void;
  cart: any[];
  handleRemoveFromCart: (productId: string) => void;
  handleQuantityChange: (productId: string, quantity: number) => void;
  totalAmount: number;
}

const formatPrice = (price: number) => {
  return price.toLocaleString("vi-VN");
};

const GioHang: React.FC<GioHangProps> = ({
  open,
  onClose,
  cart,
  handleRemoveFromCart,
  handleQuantityChange,
  totalAmount,
}) => {
  const { showNotification } = useNotify();

  const handleRemove = (productId: string, productName: string) => {
    handleRemoveFromCart(productId);
    showNotification({
      message: `${productName} đã bị xóa khỏi giỏ hàng!`,
      variant: "success",
    });
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-cart-title">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: 2,
          borderRadius: 2,
          boxShadow: 3,
          width: "70%",
          maxHeight: "80vh",
          overflowY: "auto",
        }}
      >
        <Typography id="modal-cart-title" variant="h6" sx={{ marginBottom: 2 }}>
          Giỏ Hàng
        </Typography>

        <TableContainer
          sx={{
            overflowX: { xs: "auto", sm: "hidden" },
            maxHeight: "60vh",
            overflowY: "auto",
          }}
        >
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Ảnh</TableCell>
                <TableCell>Sản phẩm</TableCell>
                <TableCell>Giá</TableCell>
                <TableCell>Số lượng</TableCell>
                <TableCell>Tùy chọn</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <CardMedia
                      component="img"
                      image={product.anhDaiDien}
                      alt={product.tieuDe}
                      sx={{ width: 100, height: "auto" }}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {product.tieuDe}
                  </TableCell>
                  <TableCell>{formatPrice(product.gia)}đ</TableCell>
                  <TableCell>
                    <TextField
                      value={product.quantity}
                      onChange={(e) =>
                        handleQuantityChange(product.id, +e.target.value)
                      }
                      type="number"
                      sx={{ width: 60 }}
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleRemove(product.id, product.tieuDe)}
                    >
                      Xóa
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="h6">
          Tổng Cộng: {formatPrice(totalAmount)}đ
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 2,
          }}
        >
          <Button variant="outlined" onClick={onClose}>
            Đóng
          </Button>
          <Button variant="contained" color="primary">
            Thanh Toán
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default GioHang;
