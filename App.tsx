import React from "react";

import { ThemeProvider } from "styled-components/native";

import { Home } from "@/screens/Home";

import theme from "@/global/styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
