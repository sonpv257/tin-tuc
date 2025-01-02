"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchTinTucHeThong } from "../../redux/slices/tinTucSlice";
import { RootState, AppDispatch } from "../../redux/store";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import CardActionArea from "@mui/material/CardActionArea";

export default function DanhSachTinTuc() {
  const dispatch = useDispatch<AppDispatch>();
  const { tinTucList } = useSelector((state: RootState) => state.tinTucHeThong);

  useEffect(() => {
    if (tinTucList.length === 0) {
      dispatch(fetchTinTucHeThong());
    }
  }, [dispatch, tinTucList]);

  return (
    <Box sx={{ padding: 2, margin: "auto" }}>
      <Grid 
        container
        spacing={2}
        sx={{
          "& > *": {
            marginBottom: 2,
          },
        }}
      >
        {/*  */}
        {tinTucList.length > 0 &&
          tinTucList.slice(0, 1).map((tintuc, index) => (
            <Grid size={{ xs: 12, md: 8 }} key={`${tintuc.id}-${index}`}>
              <Link href={`/tin-tuc/${tintuc.id}`} passHref>
                <Card
                  sx={{
                    height: { xs: 200, sm: 460, md: 615 },
                    width: "100%",
                  }}
                  key={`${tintuc.id}-${index}`}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={tintuc.anhDaiDien}
                      alt={tintuc.tieuDe}
                      sx={{
                        height: { xs: 200, sm: 460, md: 615 },
                        objectFit: "cover",
                        position: "relative",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background:
                          "linear-gradient(0deg,rgba(0, 0, 0, 0.8) 0%,rgba(0, 0, 0, 0) 100%)",
                        color: "white",
                        padding: "10px",
                      }}
                    >
                      <Typography variant="h5" component="div">
                        {tintuc.tieuDe}
                      </Typography>
                    </Box>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          ))}

        {/*  */}
        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{ display: "flex", flexDirection: "column", gap: 1 }}
        >
          {tinTucList.slice(1, 4).map((tintuc, index) => (
            <Link
              href={`/tin-tuc/${tintuc.id}`}
              key={`${tintuc.id}-${index}`}
              passHref
            >
              <Card
                sx={{
                  width: {xs: "100%", md:"80%"},
                  height: { xs: 270, md: 200 },
                  position: "relative",
                }}
              >
                <CardMedia
                  component="img"
                  image={tintuc.anhDaiDien}
                  alt={tintuc.tieuDe}
                  sx={{ height: { xs: 200, md: "70%" }, objectFit: "cover" }}
                />
                <CardContent
                  sx={{
                    padding: 1,
                    backgroundColor: "#000",
                  }}
                >
                  <Typography sx={{ color: "#fff" }} variant="subtitle1">
                    {tintuc.tieuDe}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          ))}
        </Grid>
      </Grid>

      {/*  */}
      <Box mt={4}>
        <Grid container spacing={2}>
          {tinTucList.slice(4).map((tintuc, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={`${tintuc.id}-${index}`}>
              <Link href={`/tin-tuc/${tintuc.id}`} passHref>
                <Card
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: 253,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={tintuc.anhDaiDien}
                    alt={tintuc.tieuDe}
                    sx={{
                      height: 200,
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <CardContent
                    sx={{
                      padding: 1,
                      backgroundColor: "#000",
                    }}
                  >
                    <Typography sx={{ color: "#fff" }} variant="subtitle2">
                      {tintuc.tieuDe}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
