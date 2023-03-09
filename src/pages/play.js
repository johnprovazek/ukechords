import React from "react";
// import { useContext } from "react";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import UkeChord from "../components/ukeChord";
import AddIcon from '@mui/icons-material/Add';
// import ChordDataContext from "../components/chordDataContext";

const PlayPage = () => {
  // const {chordData} = useContext(ChordDataContext);
  const [speed, setSpeed] = React.useState("Slow");
  const [playChords, setPlayChords] = React.useState(["C","D","E","F","G"]);

  const handleSpeedChange = (event, newSpeed) => {
    setSpeed(newSpeed);
  };

  // const handlePlayChordsChange = (event, newChordArray) => {
  //   setPlayChords(newChordArray);
  // };

  // function getNewChord(){ // TODO: look to see if i can write this more effciently
  //   let sortable = []
  //   for (var chord in chordData) {
  //     if(chordData[chord]["p"] !== 100){
  //       sortable.push([chord, chordData[chord]["m"]])
  //     }
  //   }
  //   sortable.sort(function(a, b) {
  //       return a[1] - b[1]
  //   });
  //   let sortedArray = []
  //   for (var i in sortable) {
  //     sortedArray.push(sortable[i][0])
  //   }
  // }

  const removeChord = (data) => {
    console.log("removeChord")
    console.log(data)
    console.log(playChords)
    const newPlayChords = playChords.filter((t) => t !== data);
    setPlayChords(newPlayChords);
  }

  const displayChordSelector = (data) => {
    console.log("displayChordSelector")
    console.log(data)
  }

  const randomizeChord = (data) => {
    console.log("randomizeChord")
    console.log(data)
  }

  // Ran once at start
  // React.useEffect(() => {
  //   getNewChord()
  // }, [])

  return (
    <Container maxWidth="xl">
      <Typography variant="h3" mt={2} mb={0}>
        Play
      </Typography>
      <Typography paragraph={true} mt={2} mb={0}>
        This page tests how well you can play chords.
      </Typography>
      <ToggleButtonGroup value={speed} exclusive onChange={handleSpeedChange} aria-label="speed change toggle" sx={{ mt: 2, flexWrap: 'wrap'}} >
        <ToggleButton value="Slow" aria-label="Slow">
          <Typography sx={{ width: 218, textTransform: "none"  }}>Slow</Typography>
        </ToggleButton>
        <ToggleButton value="Normal" aria-label="Fast">
          <Typography sx={{ width: 218, textTransform: "none"  }}>Normal</Typography>
        </ToggleButton>
        <ToggleButton value="Fast" aria-label="Fast">
          <Typography sx={{ width: 218, textTransform: "none"  }}>Fast</Typography>
        </ToggleButton>
      </ToggleButtonGroup>
      <Button>Randomize All</Button>
      <Grid container spacing={2} mt={2}>
        {playChords.map((key) =>
          <Grid key={key} item xs={12} sm={6} md={4} lg={4} xl={3}>
            <UkeChord chord={key} pageStyle="play" removeChord={removeChord} displayChordSelector={displayChordSelector} randomizeChord={randomizeChord}></UkeChord>
          </Grid>
        )}
        {playChords.length === 6 ? 
          null
          : 
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
            <Paper sx={{ 
              backgroundColor: "transparent", 
              height: "100%", 
              display: "flex", 
              alignItems: "center",
              cursor: "pointer" 
            }}>
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
