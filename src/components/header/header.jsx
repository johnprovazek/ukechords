import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import { Link } from "react-router-dom";
import HeaderButton from "./headerButton";

function Header() {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            <GraphicEqIcon />
            <Typography
              variant="h6"
              display={{ xs: "none", md: "block" }}
              sx={{
                ml: 1,
                fontWeight: 700,
              }}
            >
              ukechords
            </Typography>
          </Button>
          <HeaderButton page="chords"></HeaderButton>
          <HeaderButton page="memorize"></HeaderButton>
          <HeaderButton page="play"></HeaderButton>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
