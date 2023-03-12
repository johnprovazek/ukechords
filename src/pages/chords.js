import React from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import UkeChord from "../components/ukeChord";
import chordsList from '../data/json/chordsList.json';
  
const ChordsPage = () => {

  const [activeChord, setActiveChord] = React.useState("C");

  const handleChordChange = (event, newActiveChord) => {
    if(newActiveChord !== null){ // Fixes null issue. Investigate bug later.
      setActiveChord(newActiveChord);
    }
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h3" mt={2} mb={0}>
        Chords
      </Typography>
      <Typography paragraph={true} mt={2} mb={0}>
        This page shows your overall progess towards learning chords.
      </Typography>
      <ToggleButtonGroup value={activeChord} exclusive onChange={handleChordChange} aria-label="chord toggle button" sx={{ mt: 2, flexWrap: 'wrap'}} >
        <ToggleButton value="All" aria-label="All">
          <Typography sx={{ width: 30, textTransform: "none"  }}>All</Typography>
        </ToggleButton>
        <ToggleButton value="C" aria-label="C">
          <Typography sx={{ width: 30, textTransform: "none"  }}>C</Typography>
        </ToggleButton>
        <ToggleButton value="Db" aria-label="Db">
          <Typography sx={{ width: 30, textTransform: "none" }}>Db</Typography>
        </ToggleButton>
        <ToggleButton value="D" aria-label="D">
          <Typography sx={{ width: 30, textTransform: "none"  }}>D</Typography>
        </ToggleButton>
        <ToggleButton value="Eb" aria-label="Eb">
          <Typography sx={{ width: 30, textTransform: "none"  }}>Eb</Typography>
        </ToggleButton>
        <ToggleButton value="E" aria-label="E">
          <Typography sx={{ width: 30, textTransform: "none"  }}>E</Typography>
        </ToggleButton>
        <ToggleButton value="F" aria-label="F">
          <Typography sx={{ width: 30, textTransform: "none"  }}>F</Typography>
        </ToggleButton>
        <ToggleButton value="Gb" aria-label="Gb">
          <Typography sx={{ width: 30, textTransform: "none"  }}>Gb</Typography>
        </ToggleButton>
        <ToggleButton value="G" aria-label="G">
          <Typography sx={{ width: 30, textTransform: "none"  }}>G</Typography>
        </ToggleButton>
        <ToggleButton value="Ab" aria-label="Ab">
          <Typography sx={{ width: 30, textTransform: "none"  }}>Ab</Typography>
        </ToggleButton>
        <ToggleButton value="A" aria-label="A">
          <Typography sx={{ width: 30, textTransform: "none"  }}>A</Typography>
        </ToggleButton>
        <ToggleButton value="Bb" aria-label="Bb">
          <Typography sx={{ width: 30, textTransform: "none"  }}>Bb</Typography>
        </ToggleButton>
        <ToggleButton value="B" aria-label="B">
          <Typography sx={{ width: 30, textTransform: "none"  }}>B</Typography>
        </ToggleButton>
      </ToggleButtonGroup>
      <Grid container
            spacing={2}
            mt={2}
            columns={24}
            justifyContent="center"
            alignItems="center">
        {chordsList[activeChord].map((key) =>
          <Grid key={key} item xs={16} sm={12} md={8} lg={8} xl={6}>
            <UkeChord
              chord={key}
              pageStyle="chords"
            ></UkeChord>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};
  
export default ChordsPage;