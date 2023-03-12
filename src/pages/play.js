import React from "react";
import { useContext } from "react";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import UkeChord from "../components/ukeChord";
import AddIcon from '@mui/icons-material/Add';
import ChordDataContext from "../components/chordDataContext";

const PlayPage = () => {
  const {chordData} = useContext(ChordDataContext)
  const [speed, setSpeed] = React.useState(2000)
  // const [clockID, setClockID] = React.useState()
  // const [chordActivated, setChordActivated] = React.useState()
  const [playChordsMap, setPlayChordsMap] = React.useState(
    [
      { 
        chord: "A",
        trigger: true,
      },
      { 
        chord: "B",
        trigger: false,
      },
      { 
        chord: "C",
        trigger: false,
      },
    ]
  )

  const handleSpeedChange = (event, newSpeed) => {
    setSpeed(newSpeed)
  };

  // React.useEffect(() => {
  //   clearInterval(clockID)
  //   setClockID(setInterval(tick, speed))
  //   // eslint-disable-next-line
  // }, [speed])

  React.useEffect(() => {
    const interval = setInterval(() => {
      tick()
    }, speed);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [speed,playChordsMap]);

  function tick() {
    // console.log("Print every ", speed, " milliseconds");
    let newPlayChordsMap = [...playChordsMap]
    console.log(newPlayChordsMap)
    let trueIndex = 0
    for (let i = 0; i < newPlayChordsMap.length; i++){
      if(newPlayChordsMap[i].trigger){
        trueIndex = i
      }
      newPlayChordsMap[i].trigger = false
    }
    if(trueIndex === newPlayChordsMap.length - 1){
      trueIndex = 0
    }
    else{
      trueIndex = trueIndex + 1;
    }
    newPlayChordsMap[trueIndex].trigger = true
    setPlayChordsMap(newPlayChordsMap);
  };

  const removeChord = (chord) => {
    let newPlayChordsMap = [...playChordsMap]
    for(let index in newPlayChordsMap){
      if(newPlayChordsMap[index].chord === chord){
        newPlayChordsMap.splice(index, 1);
      }
    }
    setPlayChordsMap(newPlayChordsMap);
  }

  const displayChordSelector = (data) => {
  }

  function randomizeChords(method){
    let newPlayChordsMap = []
    let index = 0
    let numChords = 0
    if(method === "all"){ // randomizing all chords
      if(playChordsMap.length === 0){
        let min = 2
        let max = 6
        numChords = Math.floor(Math.random() * (max - min + 1) + min)
      }
      else{
        numChords = playChordsMap.length
      }
    }
    else if(method === "next"){  // randomizing just the next chord
      newPlayChordsMap = [...playChordsMap]
      index = playChordsMap.length
      numChords = playChordsMap.length + 1
    }
    let sortedPlayData = [] // Array of all chords and their play progress, sorted by play progess 
    for (let chord in chordData) {
      if(chordData[chord]["p"] !== 100){ // Once play progress is at 100 it won't be shown
        sortedPlayData.push([chord, chordData[chord]["p"]])
      }
    }
    sortedPlayData.sort(function(a, b) {
      return a[1] - b[1]
    });
    for (let i in newPlayChordsMap) { // removing possiblity of duplicates
      var spliceIndex = -1
      for (let j in sortedPlayData){
        if(newPlayChordsMap[i].chord === sortedPlayData[j][0]){
          spliceIndex = j
          break
        }
      }
      if (spliceIndex > -1) {
        sortedPlayData.splice(spliceIndex, 1);
      }
    }
    for (let i = index; i < numChords; i++){ // Randomizing new chords
      let min = 0
      let max = sortedPlayData.length - 1
      let weightedVal = Math.pow(Math.random(), 2) // TODO: create better function later, works for now
      let randomIndex = Math.floor(weightedVal * (max - min + 1)) + min
      let randomChord = sortedPlayData.splice(randomIndex, 1)[0][0];
      newPlayChordsMap.push({
        chord: randomChord,
        trigger: false,
      })
    }
    setPlayChordsMap(newPlayChordsMap)
  }

  return (
    <Container maxWidth="xl">
      <Typography variant="h3" mt={2} mb={0}>
        Play
      </Typography>
      <Typography paragraph={true} mt={2} mb={0}>
        This page tests how well you can play chords.
      </Typography>
      <ToggleButtonGroup value={speed} exclusive onChange={handleSpeedChange} aria-label="speed change toggle" sx={{ mt: 2, flexWrap: 'wrap'}} >
        <ToggleButton value={2000} aria-label="Slow">
          <Typography sx={{ width: 218, textTransform: "none"  }}>Slow</Typography>
        </ToggleButton>
        <ToggleButton value={1000} aria-label="Normal">
          <Typography sx={{ width: 218, textTransform: "none"  }}>Normal</Typography>
        </ToggleButton>
        <ToggleButton value={500} aria-label="Fast">
          <Typography sx={{ width: 218, textTransform: "none"  }}>Fast</Typography>
        </ToggleButton>
      </ToggleButtonGroup>
      <Button 
        onClick={e => {
          const method = "all"
          randomizeChords(method)
        }}
      > 
        Randomize All
      </Button>
      <Grid container spacing={2} mt={2}>
        {playChordsMap.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={4} xl={3}>
            <UkeChord chord={item.chord} trigger={item.trigger} pageStyle="play" removeChord={removeChord} displayChordSelector={displayChordSelector}></UkeChord>
          </Grid>
        ))}
        {playChordsMap.length === 6 ?
          null
          : 
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
            <Paper sx={{ 
              backgroundColor: "transparent", 
              display: "flex",
              height: "100%",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={e => {
              const method = "next"
              randomizeChords(method)
            }}
            >
              <AddIcon 
                    color="secondary" 
                    sx={{ 
                      width: "min(80%,75px)", 
                      height: "auto", 
                      margin: "0 auto", 
                      display: "block",
                    }}
              />
            </Paper>
          </Grid>
        }
      </Grid>
    </Container>
  );
};

export default PlayPage;