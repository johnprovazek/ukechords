import React from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import chordData from '../data/chords.json';
import Chord from '@tombatossals/react-chords/lib/Chord'

const instrument = {
  "strings": 4,
  "fretsOnChord": 4,
  "name": "ukulele",
  "keys": [],
  "tunings": {
      standard: ["G", "C", "E", "A"]
  }
}
  
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
        This page will show your overall progess towards learning chords.
      </Typography>
      <ToggleButtonGroup value={activeChord} exclusive onChange={handleChordChange} aria-label="chord toggle button" sx={{ mt: 2, flexWrap: 'wrap'}} >
        <ToggleButton value="All" aria-label="All" disabled>
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
      <Grid container spacing={2} mt={2}>
        {Object.keys(chordData[activeChord]["common"]).map((key) =>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
            <Paper >
              <Typography variant="h3">{key}</Typography>
              <Chord chord={chordData[activeChord]["common"][key]["chordDiagram"]} instrument={instrument} lite={false}/>
              <Typography variant="h6"> Memorize Slider</Typography>
              <Slider
                aria-label="Memorize Slider"
                defaultValue={30}
                step={10}
                min={0}
                max={100}
                marks={[
                  {
                    value: 0,
                    label: 'Beginner',
                  },
                  {
                    value: 100,
                    label: 'Advanced',
                  },
                ]}
                sx={{ width: 1/2}}
              />
              <Typography variant="h6"> Play Slider</Typography>
              <Slider
                aria-label="Play Slider"
                defaultValue={30}
                step={10}
                min={0}
                max={100}
                marks={[
                  {
                    value: 0,
                    label: 'Beginner',
                  },
                  {
                    value: 100,
                    label: 'Advanced',
                  },
                ]}
                sx={{ width: 1/2}}
              />
            </Paper>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};
  
export default ChordsPage;