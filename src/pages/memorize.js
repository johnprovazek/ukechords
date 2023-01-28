import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from '@mui/material/Grid';
import UkeChord from "../components/ukeChord";
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Paper from '@mui/material/Paper';

const MemorizePage = () => {

  const [style, setStyle] = React.useState("Diagram");

  const handleStyleChange = (event, newStyle) => {
    if(newStyle !== null){ // Fixes null issue. Investigate bug later.
      setStyle(newStyle);
    }
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h3" mt={2} mb={0}>
        Memorize
      </Typography>
      <Typography paragraph={true} mt={2} mb={0}>
        This page will help you with chord memorization.
      </Typography>
      <ToggleButtonGroup value={style} exclusive onChange={handleStyleChange} aria-label="memorization style toggle button" sx={{ mt: 2, flexWrap: 'wrap'}} >
        <ToggleButton value="Diagram" aria-label="Diagram">
          <Typography sx={{ width: 327, textTransform: "none"  }}>Diagram</Typography>
        </ToggleButton>
        <ToggleButton value="Chord" aria-label="Chord">
          <Typography sx={{ width: 327, textTransform: "none"  }}>Chord</Typography>
        </ToggleButton>
      </ToggleButtonGroup>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={2} sm={2} md={4} lg={4} xl={3}>
          <Paper>
            <Button aria-label="arrow back" color="secondary">
              <ArrowBackIosIcon />
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={8} sm={8} md={4} lg={4} xl={6}>
          <UkeChord chord="C" pageStyle="memorize"></UkeChord>
        </Grid>
        <Grid item xs={2} sm={2} md={4} lg={4} xl={3}>
          <Paper>
              <Button aria-label="arrow forward" color="secondary">
                <ArrowForwardIosIcon />
              </Button>
            </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
  
export default MemorizePage;