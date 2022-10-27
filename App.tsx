import React from "react";

import { Routes } from "@/Routes/routes";

import { ThemeProvider } from "styled-components/native";

import theme from "@/global/styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
