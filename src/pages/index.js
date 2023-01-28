import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import UCTypography from '../components/material/ucTypography';

  
const Home = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h3" mt={2}>
        Welcome to UkeChords
      </Typography>
      <Typography paragraph={true} mt={2}>
        This is a website developed to help you learn and memorize ukulele chords. Good luck and have fun!
      </Typography>
    </Container>
  );
};
  
export default Home;