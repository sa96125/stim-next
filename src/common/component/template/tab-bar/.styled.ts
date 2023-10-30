import Link from "next/link";
import styled from "@emotion/styled";

import { Box, Typography } from "@mui/material";
import {TAB_BAR_HEIGHT} from "@/common/style";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  position: "fixed",
  bottom: "0",
  height: TAB_BAR_HEIGHT,
  width: "100vw",
  backgroundColor: "pink",
}));

export const Wrapper = styled(Link)(({ theme, active }: any) => ({
  color: theme.active,
  width: "20%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const Image = styled(`img`)(({ theme }) => ({}));

export const Label = styled(Typography)(({ theme }) => ({}));
