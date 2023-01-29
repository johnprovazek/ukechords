import * as React from 'react'
import { useEffect } from 'react';
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

  const [memorizationHidden, setMemorizationHidden] = React.useState(true);

  // TODO: Should only go from true -> false once. Look into more effcient method.
  const handleMemorizationToggle = () => {
    if(memorizationHidden){
      setMemorizationHidden(false);
    }
  };

  useEffect(() => {
    // console.log(props.chord)
    setMemorizationHidden(true);
  },[]);

  // Refactor this later
  if (props.pageStyle === "chords") {
    return (
      <Paper sx={{  pt: 2, pb: 2 }}>
        <Typography variant="h3">{props.chord}</Typography>
        <Chord chord={chordDiagram[props.chord]["chordDiagram"]} instrument={instrument} lite={false}/>
        <Typography variant="h6"> Memorize Slider</Typography>
        <Slider defaultValue={30} step={10} min={0} max={100}
          marks={[{value: 0,label: 'Beginner'},{value: 100,label: 'Advanced'},]}
          sx={{ width: 1/2}} aria-label="Memorize Slider"/>
        <Typography variant="h6"> Play Slider</Typography>
        <Slider defaultValue={30} step={10} min={0} max={100}
          marks={[{value: 0,label: 'Beginner'},{value: 100,label: 'Advanced'},]}
          sx={{ width: 1/2}} aria-label="Play Slider"/>
      </Paper>
    );
  }
  else if (props.pageStyle === "memorize") {
    return (
      <Paper sx={{  pt: 2, pb: 2 }} onClick={handleMemorizationToggle}>
        <Typography visibility={memorizationHidden ? "hidden" : "visible"} variant="h3" >{props.chord}</Typography>

        { memorizationHidden ? 
          <div className="bigChunkMemorizationHidden">
            { props.memorizationStyle === "Diagram" ? 
              <Chord chord={chordDiagram[props.chord]["chordDiagram"]} instrument={instrument} lite={false}/>
            : 
              <svg width="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 80 70">
                <text textAnchor="middle" fontSize="large" x="40" y="40" fill="#444444">{props.chord}</text>
              </svg>
            }
          </div>
        : 
          <div className="bigChunkMemorizationShown">
            <Chord chord={chordDiagram[props.chord]["chordDiagram"]} instrument={instrument} lite={false}/>
          </div>
        }
        <Typography visibility={memorizationHidden ? "hidden" : "visible"} variant="h6"> Memorize Slider</Typography>
        <Slider defaultValue={30} step={10} min={0} max={100}
          marks={[{value: 0,label: 'Beginner'},{value: 100,label: 'Advanced'},]}
          sx={{ width: 1/2, visibility: memorizationHidden ? "hidden" : "visible"}} aria-label="Memorize Slider"/>
      </Paper>
    );
  }
  else if (props.pageStyle === "play") {
    return <div>play</div>
  }
  else{
    return <div>error</div>
  }
}
export default UkeChord;