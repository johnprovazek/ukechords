import React from 'react';
import Typography from '@mui/material/Typography';  

const PlayPage = () => {
  return (
    <div>
      <Typography variant="h3" mt={2} ml={2}>
        Play
      </Typography>
      <Typography paragraph={true} mt={2} ml={2}>
        This page will randomize some chords for you to play to help you learn. Use the skills slider on the chords to adjust how well you know them. The better skills on the chords, the less they will show up on this page. You can also adjust the skills sliders for each chord on the Chords page.
      </Typography>
    </div>
  );
};
  
export default PlayPage;