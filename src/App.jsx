import Container from "@mui/material/Container";
import Header from "./components/header/header.jsx";
import ChordsPage from "./pages/chords/chords.jsx";
import HomePage from "./pages/home/home.jsx";
import PlayPage from "./pages/play/play.jsx";
import MemorizePage from "./pages/memorize/memorize.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { HashRouter, Routes, Route } from "react-router-dom";
import { setAllChords } from "./hooks/useLocalStorageChords";

setAllChords();

let portfolio = createTheme({
  palette: {
    primary: {
      main: "#add8e6",
      light: "#def0f5",
      dark: "#74bed8",
      contrastText: "#444444",
    },
    secondary: {
      main: "#bee6ce",
      light: "#e4f5eb",
      dark: "#94d6af",
      contrastText: "#444444",
    },
    highlight: {
      main: "#f6b374",
      light: "#fbdebf",
      dark: "#f2944e",
      contrastText: "#444444",
    },
    default: {
      main: "#ffffff",
      light: "#faf9f6",
      dark: "#c2c2c2",
      white: "#ffffff",
      black: "#444444",
      contrastText: "#444444",
    },
  },
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          "&:last-child": {
            paddingBottom: 16,
          },
        },
      },
    },
  },
  typography: {
    fontFamily: ["Signika Variable", "Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
    fontSize: 18,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 550,
      md: 900,
      lg: 1200,
      xl: 1432,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={portfolio}>
      <HashRouter base="#">
        <Header />
        <Container
          disableGutters
          maxWidth="xl"
          sx={{
            px: 2,
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chords" element={<ChordsPage />} />
            <Route path="/memorize" element={<MemorizePage />} />
            <Route path="/play" element={<PlayPage />} />
          </Routes>
        </Container>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
