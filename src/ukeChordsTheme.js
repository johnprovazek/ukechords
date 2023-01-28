// import { createTheme } from "@mui/system";
import { createTheme } from "@mui/material/styles";


export const ukeChordsTheme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          textAlign: "center"
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          ".MuiSlider-mark": {
            backgroundColor: "transparent"
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#444444"
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          "&.MuiToggleButton-root.Mui-selected": {
            backgroundColor: "#1a4645"
          },
          "&.MuiToggleButton-root.Mui-selected p": {
            color: "white",
          },
          "&.MuiToggleButtonGroup-grouped:not(:last-of-type)": {
            borderTopRightRadius: "inherit",
            borderBottomRightRadius: "inherit"
          },
          "&.MuiToggleButtonGroup-grouped:not(:first-of-type)": {
            marginLeft: "inherit",
            borderLeft: "inherit",
            borderTopLeftRadius: "inherit",
            borderBottomLeftRadius: "inherit"
          },
          "&.MuiToggleButtonGroup-grouped": {
            borderRadius: "4px !important",
            mx: 1,
            border: "1px solid lightgrey !important"
          }
        },
      },
    },
  },
  palette: {
    primary: {
      light: '#266867',
      main: '#1a4645',
      dark: '#051821'
    },
    secondary: {
      light: '#f8bc24',
      main: '#f58800',
      dark: '#FF10F0' // don't use
    },
    background: {
      default: '#F1F3F4' //#266867
    }
  }
});