import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Home = () => {
  return (
    <div>
      <Container maxWidth="xl">
        <Typography variant="h3" mt={2}>
          Welcome to UkeChords
        </Typography>
        <Typography paragraph={true} mt={2}>
          This website is developed to help you learn and memorize ukulele chords.
        </Typography>
      <img width="100%" src={require("../data/tiz.png")} alt=""/>
      </Container>
    </div>
  );
};
  
export default Home;
