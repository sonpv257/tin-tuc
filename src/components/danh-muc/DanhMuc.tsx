"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDanhMuc } from "../../redux/slices/danhMucSlice";
import { RootState, AppDispatch } from "../../redux/store";
import { ELogo } from "../ui/ELogo";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";

export default function DanhMuc() {
  const dispatch = useDispatch<AppDispatch>();
  const { danhMucList } = useSelector((state: RootState) => state.danhMuc);

  useEffect(() => {
    if (danhMucList.length === 0) {
      dispatch(fetchDanhMuc());
    }
  }, [dispatch, danhMucList]);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none", marginTop: "5px" } }}
            >
              {danhMucList.map((danhmuc) => (
                <MenuItem
                  key={danhmuc.id}
                  onClick={handleCloseNavMenu}
                  sx={{ width: "400px" }}
                >
                  <Typography textAlign="left">{danhmuc.tenDanhMuc}</Typography>
                </MenuItem>
              ))}
              {/* Products page */}
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/san-pham">
                  <Typography textAlign="left">Products</Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>

          <Link href="/">
            <ELogo />
          </Link>

          {/* Desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {danhMucList.map((danhmuc) => (
              <Button
                key={danhmuc.id}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {danhmuc.tenDanhMuc}
              </Button>
            ))}
            {/* Products button */}
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link href="/san-pham">Products</Link>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
