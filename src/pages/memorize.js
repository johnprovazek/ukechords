import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';  


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
    </Container>
  );
};
  
export default MemorizePage;