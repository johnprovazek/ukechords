import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import UkeChord from "../components/ukeChord";

const PlayPage = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h3" mt={2} mb={0}>
        Play
      </Typography>
      <Typography paragraph={true} mt={2} mb={0}>
        This page will randomize some chords for you to play to help you learn. Use the skills slider on the chords to adjust how well you know them. The better skills on the chords, the less they will show up on this page. You can also adjust the skills sliders for each chord on the Chords page.
      </Typography>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={2} sm={2} md={4} lg={4} xl={3}>
          <Paper sx={{ boxShadow: "none", backgroundColor: "pink", height: "100%", display: "flex", alignItems: "center" }}>
          </Paper>
        </Grid>
        <Grid item xs={8} sm={8} md={4} lg={4} xl={6}>
          <UkeChord chord="C" pageStyle="memorize" memorizationStyle="play"></UkeChord>
        </Grid>
        <Grid item xs={2} sm={2} md={4} lg={4} xl={3}>
          <Paper sx={{ boxShadow: "none", backgroundColor: "yellow", height: "100%", display: "flex", alignItems: "center" }}>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
  
export default PlayPage;