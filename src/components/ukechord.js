import * as React from 'react'
import chordDiagram from '../data/chordsDiagram.json';
import Chord from '@tombatossals/react-chords/lib/Chord'
import Paper from '@mui/material/Paper';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

const instrument = {
    "strings": 4,
    "fretsOnChord": 4,
    "name": "ukulele",
    "keys": [],
    "tunings": {
        standard: ["G", "C", "E", "A"]
    }
  }

function UkeChord(props) {
      
    return (
        <Paper >
        <Typography variant="h3">{props.chord}</Typography>
        <Chord chord={chordDiagram[props.chord]["chordDiagram"]} instrument={instrument} lite={false}/>
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
    );
  }
  export default UkeChord;