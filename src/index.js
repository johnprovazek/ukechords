import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { ukeChordsTheme } from "./ukeChordsTheme";
import CssBaseline from '@mui/material/CssBaseline';
import { GoogleOAuthProvider } from '@react-oauth/google';


import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ThemeProvider theme={ukeChordsTheme}>
    <CssBaseline/>
    <GoogleOAuthProvider clientId="882648076498-mebve0aqktvvd180s5udffucile3g1g3.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </ThemeProvider>
);