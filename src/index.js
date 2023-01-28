import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { ukeChordsTheme } from "./ukeChordsTheme";
import CssBaseline from '@mui/material/CssBaseline';

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ThemeProvider theme={ukeChordsTheme}>
    <CssBaseline/>
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>
);