import * as React from 'react'
import { useEffect } from 'react';
import chordDiagramJSON from '../data/chordsDiagram.json';
import chordUserDataJSON from '../data/chordsUserData.json';
import Chord from '@tombatossals/react-chords/lib/Chord'
import Paper from '@mui/material/Paper';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const instrument = {
  "strings": 4,
  "fretsOnChord": 4,
  "name": "ukulele",
  "keys": [],
  "tunings": {
      standard: ["G", "C", "E", "A"]
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case "chordChange":
      return {
        ...state,
        mSliderValue: state.localChordData[action.currentChord]["m"],
        pSliderValue: state.localChordData[action.currentChord]["p"]
      }
    case "sliderChange":
      return {
        ...state,
        localChordData:{
          ...state.localChordData,
          [action.chord]: {
            ...state.localChordData[action.chord],
            [action.slider]: action.value
          }
        },
        [action.slider + "SliderValue"]: action.value
      }
    default:
      return state
  }
}

function UkeChord(props) {

  const [memorizationHidden, setMemorizationHidden] = React.useState(true);
  const [{ localChordData, mSliderValue, pSliderValue}, dispatch] = React.useReducer(reducer, {
    localChordData: localStorage.getItem('localChordData') ? JSON.parse(localStorage.getItem('localChordData')) : chordUserDataJSON,
    mSliderValue: 10, 
    pSliderValue: 10
  })

  useEffect(() => {
    console.log("localChordData Changed")
    localStorage.setItem('localChordData', JSON.stringify(localChordData))
    console.log(localChordData)
  }, [localChordData])

  useEffect(() => {
    console.log("props.chord Changed")
    const currentChord = props.chord
    dispatch({ type: "chordChange", currentChord })
    setMemorizationHidden(true);
  },[props.chord]);
  
  const handleMemorizationToggle = () => {
    if(memorizationHidden){
      setMemorizationHidden(false);
    }
  };
  
  // Refactor this later
  if (props.pageStyle === "chords") {
    return (
      <Paper sx={{  pt: 2, pb: 2 }}>
        <Typography variant="h3">{props.chord}</Typography>
        <Chord chord={chordDiagramJSON[props.chord]["chordDiagram"]} instrument={instrument} lite={false}/>
        <Box className="memorizeSliderContainer" >
          <Typography variant="h6"> Memorize Slider</Typography>
          <Slider value={mSliderValue} step={10} min={0} max={100}
            marks={[{value: 0,label: 'Beginner'},{value: 100,label: 'Advanced'}]}
            sx={{ width: 1/2, color: mSliderValue === 100 ? "#F58800" : "#1A4645"} } 
            aria-label="Memorize Slider" name="m" 
            onChange={e => {
              const value = e.target.value
              const chord = props.chord
              const slider = "m"
              dispatch({ type: "sliderChange", value, chord, slider})
            }}
          />
        </Box>
        <Box className="playSliderContainer" sx={{ }}>
          <Typography variant="h6"> Play Slider</Typography>
          <Slider value={pSliderValue} step={10} min={0} max={100}
            marks={[{value: 0,label: 'Beginner'},{value: 100,label: 'Advanced'},]}
            sx={{ width: 1/2, color: pSliderValue === 100 ? "#F8BC24" : "#1A4645"}} 
            aria-label="Play Slider" name="m" 
            onChange={e => {
              const value = e.target.value
              const chord = props.chord
              const slider = "p"
              dispatch({ type: "sliderChange", value, chord, slider})
            }}
          />
        </Box>
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
              <Chord chord={chordDiagramJSON[props.chord]["chordDiagram"]} instrument={instrument} lite={false}/>
            : 
              <svg width="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 80 70">
                <text textAnchor="middle" fontSize="large" x="40" y="40" fill="#444444">{props.chord}</text>
              </svg>
            }
          </div>
        : 
          <div className="bigChunkMemorizationShown">
            <Chord chord={chordDiagramJSON[props.chord]["chordDiagram"]} instrument={instrument} lite={false}/>
          </div>
        }
        <Typography visibility={memorizationHidden ? "hidden" : "visible"} variant="h6"> Memorize Slider</Typography>
        <Slider value={mSliderValue} step={10} min={0} max={100}
          marks={[{value: 0,label: 'Beginner'},{value: 100,label: 'Advanced'},]}
          sx={{ width: 1/2, visibility: memorizationHidden ? "hidden" : "visible", color: mSliderValue === 100 ? "#F58800" : "#1A4645"}} 
          aria-label="Memorize Slider" name="m" 
          onChange={e => {
            const value = e.target.value
            const chord = props.chord
            const slider = "m"
            dispatch({ type: "sliderChange", value, chord, slider})
          }}
        />
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