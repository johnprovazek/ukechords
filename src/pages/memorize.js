import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from '@mui/material/Grid';
import UkeChord from "../components/ukeChord";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Paper from '@mui/material/Paper';
import chordUserDataJSON from '../data/chordsUserData.json';
import Button from '@mui/material/Button';

const reducer = (state, action) => {
  switch (action.type) {
    case "addNewChord":
      return {
        mChordArray : [...state.mChordArray, action.newChord], 
        mHidden : true,
        index : action.newIndex
      }
    case "updateIndex":
      return {
        ...state,
        mHidden: false,
        index : action.newIndex
      }
    case "updateHidden":
      return {
        ...state,
        mHidden: action.newHidden,
      }
    default:
      return state
  }
}

const MemorizePage = () => {
  const [mStyle, setMStyle] = React.useState("Diagram");
  const [sortedMasterChordArray, setSortedMasterChordArray] = React.useState(() => setupSortedMasterChordArray())
  const [visitedAll, setVisitedAll] = React.useState(false);
  const [{mChordArray, mHidden, index}, dispatch] = React.useReducer(reducer, {
    mChordArray : ["C"],
    mHidden: true,
    index : 0
  })

  const handleMStyleChange = (event, newMStyle) => {
    if(newMStyle !== null){ // Fixes null issue. Investigate bug later.
      setMStyle(newMStyle);
    }
  };

  function setupSortedMasterChordArray(){
    let localChordData = localStorage.getItem('localChordData') ? JSON.parse(localStorage.getItem('localChordData')) : chordUserDataJSON
    let sortable = []
    for (var chord in localChordData) {
        sortable.push([chord, localChordData[chord]["m"]])
    }
    sortable.sort(function(a, b) {
        return a[1] - b[1]
    });
    let masterArray = []
    for (var i in sortable) {
      masterArray.push(sortable[i][0])
    }
    return masterArray
  }

  function getNextChord(){
    if(sortedMasterChordArray.length === 0){
      setVisitedAll(true)
      // create a refresh button
      setupSortedMasterChordArray()
    }
    else{
      let min = 0;
      let max = Math.floor(sortedMasterChordArray.length - 1)
      let weightedVal = Math.pow(Math.random(), 2) // create better function later
      let randomIndex = Math.floor(weightedVal * (max - min + 1)) + min;
      console.log(Math.random())
      return sortedMasterChordArray[randomIndex]
    }
  }

  function nextButton(){
    if(index < mChordArray.length){
      if(index === mChordArray.length - 1){
        let newChord = getNextChord()
        let newIndex = index + 1
        dispatch({ type: "addNewChord", newChord, newIndex})
      }
      else{
        let newIndex = index + 1
        dispatch({ type: "updateIndex", newIndex})
      }
    }
  }

  function previousButton(){
    if(index > 0){
      let newIndex = index - 1
      dispatch({ type: "updateIndex", newIndex})
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true)
  }, [])

  const detectKeyDown = (e) => {
    if(e.key === " "){
      console.log("space")
    }
    else if(e.key === "Enter"){
      console.log("enter")
    }
    else if(e.key === "ArrowRight"){
      console.log("right")
    }
    else if(e.key === "ArrowLeft"){
      console.log("left")
    }
  }

  return (
    <Container maxWidth="xl">
      <Typography variant="h3" mt={2} mb={0}>
        Memorize
      </Typography>
      <Typography paragraph={true} mt={2} mb={0}>
        This page helps test your chord memorization.
      </Typography>
      <ToggleButtonGroup value={mStyle} exclusive onChange={handleMStyleChange} aria-label="memorization style toggle button" sx={{ mt: 2, flexWrap: 'wrap'}} >
        <ToggleButton value="Diagram" aria-label="Diagram">
          <Typography sx={{ width: 327, textTransform: "none"  }}>Diagram</Typography>
        </ToggleButton>
        <ToggleButton value="Chord" aria-label="Chord">
          <Typography sx={{ width: 327, textTransform: "none"  }}>Chord</Typography>
        </ToggleButton>
      </ToggleButtonGroup>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={2} sm={2} md={4} lg={4} xl={3}>
          <Paper 
            onClick={previousButton}
            sx={{ 
              boxShadow: "none", 
              backgroundColor: "transparent", 
              height: "100%", 
              display: "flex", 
              alignItems: "center", 
              cursor: index === 0 ? "default" : "pointer"
            }}>
            <ArrowBackIosIcon 
              color="secondary" 
              sx={{ 
                width: "min(80%,75px)", 
                height: "auto", 
                margin: "0 auto", 
                display: "block",
                opacity: index === 0 ? "0.2" : "1.0"
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={8} sm={8} md={4} lg={4} xl={6}>
          <UkeChord chord={mChordArray[index]} pageStyle="memorize" mStyle={mStyle} mHidden={mHidden}></UkeChord>
          {visitedAll && <Button variant="text" sx={{ alignItems: "center", width: "100%"}} onClick={reset}>Click here to Reset.</Button>}
        </Grid>
        <Grid item xs={2} sm={2} md={4} lg={4} xl={3}>
          <Paper 
            onClick={nextButton}
            sx={{ 
              boxShadow: "none", 
              backgroundColor: "transparent", 
              height: "100%", 
              display: "flex", 
              alignItems: "center",
              cursor: visitedAll ? "default" : "pointer"
            }}>
            <ArrowForwardIosIcon 
              color="secondary" 
              sx={{ 
                width: "min(80%,75px)", 
                height: "auto", 
                margin: "0 auto", 
                display: "block",
                opacity: visitedAll ? "0.2" : "1.0"
              }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
  
export default MemorizePage;