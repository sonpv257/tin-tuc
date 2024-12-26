import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { fetchSanPham } from "@/redux/slices/sanPhamSlice";
import SanPham from "@/components/san-pham/SanPham";
import GioHang from "@/components/san-pham/GioHang";
import { Box, Typography } from "@mui/material";
import IconCart from "@/components/ui/IconCart";

const DanhSachSanPham = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { sanPhamList } = useSelector((state: RootState) => state.sanPham);
  const [cart, setCart] = useState<any[]>([]);
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    if (sanPhamList.length === 0) {
      dispatch(fetchSanPham());
    }
  }, [dispatch, sanPhamList]);

  const handleAddToCart = (product: any) => {
    setCart((prevCart) => {
      const isProductInCart = prevCart.find((item) => item.id === product.id);
      if (isProductInCart) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const handleQuantityChange = (productId: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      )
    );
  };

  const handleOpenCart = () => setOpenCart(true);
  const handleCloseCart = () => setOpenCart(false);

  const totalAmount = cart.reduce(
    (total, product) => total + (product.gia || 0) * product.quantity,
    0
  );

  return (
    <>
      <Box sx={{ padding: 2 }}>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
          Danh Sách Sản Phẩm
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          {sanPhamList.map((product) => (
            <SanPham
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </Box>

        <IconCart cartCount={cart.length} onClick={handleOpenCart} />

        <GioHang
          open={openCart}
          onClose={handleCloseCart}
          cart={cart}
          handleRemoveFromCart={handleRemoveFromCart}
          handleQuantityChange={handleQuantityChange}
          totalAmount={totalAmount}
        />
      </Box>
    </>
  );
};

export default DanhSachSanPham;
