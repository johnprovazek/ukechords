import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import UkeChord from "../../components/ukeChord/ukeChord.jsx";

function MemorizeGrid({
  chord,
  shown,
  memorizeStyle,
  prevDisabled,
  nextDisabled,
  handlePrev,
  handleNext,
  handleReveal,
}) {
  return (
    <>
      <Grid container columns={24} spacing={2} mb={2} justifyContent="center" alignItems="center">
        <Grid
          size={{ sm: 6, md: 4, lg: 3 }}
          align="center"
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          <IconButton
            disabled={prevDisabled}
            color="highlight"
            sx={{
              height: "min(100%, 100px)",
              width: "min(100%, 100px)",
            }}
            onClick={handlePrev}
          >
            <KeyboardArrowLeftIcon sx={{ height: "100%", width: "100%" }} />
          </IconButton>
        </Grid>
        <Grid
          size={{ xs: 24, sm: 12, md: 8, lg: 6 }}
          sx={{
            cursor: shown ? "default" : "pointer",
          }}
          onClick={handleReveal}
        >
          <UkeChord chord={chord} highlight={shown} hidden={!shown} memorizeStyle={memorizeStyle} />
        </Grid>
        <Grid
          size={{ sm: 6, md: 4, lg: 3 }}
          align="center"
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          <IconButton
            disabled={nextDisabled}
            color="highlight"
            sx={{
              height: "min(100%, 100px)",
              width: "min(100%, 100px)",
            }}
            onClick={handleNext}
          >
            <KeyboardArrowRightIcon sx={{ height: "100%", width: "100%" }} />
          </IconButton>
        </Grid>
      </Grid>
      <Grid
        container
        columns={24}
        spacing={1}
        mb={2}
        mx="auto"
        sx={{
          display: {
            xs: "flex",
            sm: "none",
          },
          width: "100%",
        }}
      >
        <Grid size={{ xs: 12 }}>
          <Button
            disabled={prevDisabled}
            variant="contained"
            color="highlight"
            startIcon={<KeyboardArrowLeftIcon />}
            sx={{
              textTransform: "capitalize",
              width: "100%",
              minWidth: 0,
            }}
            onClick={handlePrev}
          >
            previous
          </Button>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Button
            disabled={nextDisabled}
            variant="contained"
            color="highlight"
            endIcon={<KeyboardArrowRightIcon />}
            sx={{
              textTransform: "capitalize",
              width: "100%",
              minWidth: 0,
            }}
            onClick={handleNext}
          >
            next
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default MemorizeGrid;
