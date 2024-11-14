import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import donut0 from "../../assets/images/donutBackground_0.svg";
import donut1 from "../../assets/images/donutBackground_1.svg";
import donut2 from "../../assets/images/donutBackground_2.svg";

const donutSVGs = [donut0, donut1, donut2];

function capitalizePageName(page) {
  return page.charAt(0).toUpperCase() + page.slice(1);
}

const PageItem = ({ page, description, index }) => {
  const mediumScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const theme = useTheme();
  return (
    <>
      <Card
        sx={{
          backgroundImage: `linear-gradient(to left, rgba(255,255,255,${mediumScreen ? 0 : 255}), white calc(110% - ${theme.breakpoints.values.md}px)), url(${donutSVGs[index % donutSVGs.length]})`,
          backgroundSize: "auto 100%",
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {capitalizePageName(page)} Page
          </Typography>
          <Typography variant="body2" mb={1} sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
          <CardActions>
            <Button component={Link} to={"/" + page} variant="contained" size="small">
              {page}
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
};

export default PageItem;
