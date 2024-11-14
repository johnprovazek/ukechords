import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";

const HeaderButton = ({ page }) => {
  return (
    <>
      <Button
        component={Link}
        to={"/" + page}
        color="inherit"
        sx={{
          ...(useLocation().pathname === "/" + page && {
            textDecoration: "underline",
            textDecorationThickness: "0.2rem",
            "&.MuiButtonBase-root:hover": {
              textDecoration: "underline",
              textDecorationThickness: "0.2rem",
            },
            textUnderlineOffset: "0.4rem",
          }),
        }}
      >
        {page}
      </Button>
    </>
  );
};

export default HeaderButton;
