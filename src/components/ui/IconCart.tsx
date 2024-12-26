"use client";

import React from "react";
import { Box, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface IconCartProps {
  cartCount: number;
  onClick: () => void;
}

const IconCart: React.FC<IconCartProps> = ({
  cartCount,
  onClick,
}) => {
  return (
    <IconButton
      color="primary"
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        backgroundColor: "white",
        padding: 2,
      }}
      onClick={onClick}
    >
      <ShoppingCartIcon fontSize="large" />
      {cartCount > 0 && (
        <Box
          sx={{
            position: "absolute",
            top: -5,
            right: -5,
            backgroundColor: "red",
            color: "white",
            borderRadius: "50%",
            width: 20,
            height: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "12px",
          }}
        >
          {cartCount}
        </Box>
      )}
    </IconButton>
  );
};

export default IconCart;
