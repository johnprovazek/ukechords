import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";

function CommandBar({ toggleButtons, activeToggleButton, onToggleButton, specialButtons = [] }) {
  return (
    <>
      <Grid
        container
        columns={24}
        spacing={1}
        mx="auto"
        my={2}
        sx={{
          width: "min(100%, 692px)",
        }}
      >
        {toggleButtons.map((key) => (
          <Grid
            key={key}
            size={{
              xs: toggleButtons.length === 12 ? 4 : 24 / toggleButtons.length,
              sm: 24 / (toggleButtons.length + specialButtons.length),
            }}
          >
            <Button
              variant="contained"
              color={key === activeToggleButton ? "primary" : "default"}
              sx={{
                textTransform: "capitalize",
                width: "100%",
                minWidth: 0,
              }}
              onClick={() => {
                onToggleButton(key);
              }}
            >
              {key}
            </Button>
          </Grid>
        ))}
        {specialButtons.map((key) => (
          <Grid
            key={key.label}
            size={{ xs: 24 / specialButtons.length, sm: 24 / (toggleButtons.length + specialButtons.length) }}
          >
            <Button
              variant="contained"
              color="secondary"
              sx={{
                textTransform: "capitalize",
                width: "100%",
                minWidth: 0,
              }}
              onClick={() => {
                key.callback();
              }}
            >
              {key.label}
            </Button>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default CommandBar;
