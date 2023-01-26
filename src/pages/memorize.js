import React from 'react';
import Typography from '@mui/material/Typography';
  
const MemorizePage = () => {
  return (
    <div>
      <Typography variant="h3" mt={2} ml={2}>
        Memorize
      </Typography>
      <Typography paragraph={true} mt={2} ml={2}>
        This page will show you a chord name followed by a diagram on how to play that chord. Use this section to train your memorization. As you learn chords, mark how well you know them with the memorization slider. The better you memorize the chords, the less they will show up on this page. You can also adjust the memorization sliders for each chord on the Chords page.
      </Typography>
    </div>
  );
};
  
export default MemorizePage;