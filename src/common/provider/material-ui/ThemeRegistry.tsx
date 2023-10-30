"use client";

import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import NextAppDirEmotionCacheProvider from "./EmotionCache";

interface Props {
    children: React.ReactNode;
}

export default function ThemeRegistry({ children }: Props) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
