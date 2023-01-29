import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from '@mui/material/Grid';
import UkeChord from "../components/ukeChord";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Paper from '@mui/material/Paper';
import chordsList from '../data/chordsList.json';

const MemorizePage = () => {

  const [memorizationStyle, setMemorizationStyle] = React.useState("Diagram");
  const [randomChord, setRandomChord] = React.useState("C");

  const handleMemorizationStyleChange = (event, newMemorizationStyle) => {
    if(newMemorizationStyle !== null){ // Fixes null issue. Investigate bug later.
      setMemorizationStyle(newMemorizationStyle);
    }
  };

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function nextChord(){
    var max = chordsList["All"].length - 1
    var randomIndex = getRandomInt(0, max)
    var nextRandomChord = chordsList["All"][randomIndex]
    setRandomChord(nextRandomChord)
  }

  return (
    <Container maxWidth="xl">
      <Typography variant="h3" mt={2} mb={0}>
        Memorize
      </Typography>
      <Typography paragraph={true} mt={2} mb={0}>
        This page will help you with chord memorization.
      </Typography>
      <ToggleButtonGroup value={memorizationStyle} exclusive onChange={handleMemorizationStyleChange} aria-label="memorization style toggle button" sx={{ mt: 2, flexWrap: 'wrap'}} >
        <ToggleButton value="Diagram" aria-label="Diagram">
          <Typography sx={{ width: 327, textTransform: "none"  }}>Diagram</Typography>
        </ToggleButton>
        <ToggleButton value="Chord" aria-label="Chord">
          <Typography sx={{ width: 327, textTransform: "none"  }}>Chord</Typography>
        </ToggleButton>
      </ToggleButtonGroup>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={2} sm={2} md={4} lg={4} xl={3}>
          <Paper sx={{ boxShadow: "none", backgroundColor: "transparent", height: "100%", display: "flex", alignItems: "center" }}>
            <ArrowBackIosIcon color="secondary" sx={{ width: "min(80%,75px)", height: "auto", margin: "0 auto", display: "block"}}/>
          </Paper>
        </Grid>
        <Grid item xs={8} sm={8} md={4} lg={4} xl={6}>
          <UkeChord chord={randomChord} pageStyle="memorize" memorizationStyle={memorizationStyle}></UkeChord>
        </Grid>
        <Grid item xs={2} sm={2} md={4} lg={4} xl={3}>
          <Paper sx={{ boxShadow: "none", backgroundColor: "transparent", height: "100%", display: "flex", alignItems: "center" }} onClick={nextChord}>
            <ArrowForwardIosIcon color="secondary" sx={{ width: "min(80%,75px)", height: "auto", margin: "0 auto", display: "block"}}/>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
  
export default MemorizePage;