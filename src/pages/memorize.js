import React from 'react';
import { useContext } from "react";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from '@mui/material/Grid';
import UkeChord from "../components/ukeChord";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ChordDataContext from "../components/chordDataContext";

// TODO: Add smooth CSS transition?
// TODO: Get keyboard keys to work

const reducer = (state, action) => {
  switch (action.type) {
    case "setAll":
      return {
        ...state,
        sChordArray : action.sChordArray_a,
        mChordArray : action.mChordArray_a,
        mHidden: action.mHidden_a,
        lastMHidden: action.lastMHidden_a,
        index : action.index_a,
        visitedAll : action.visitedAll_a
      }
    case "addNewChord":
      return {
        ...state,
        sChordArray : action.sChordArray_a,
        mChordArray : [...state.mChordArray, action.chord_a],
        mHidden : true,
        lastMHidden: true,
        index : action.index_a, 
        visitedAll: action.visitedAll_a
      }
    case "updateIndex":
      return {
        ...state,
        mHidden: action.mHidden_a,
        index : action.index_a
      }
    case "setMHidden":
      return {
        ...state,
        mHidden: action.mHidden_a,
        lastMHidden: action.lastMHidden_a
      }
    default:
      return state
  }
}

// add chord field to replace mChordArray[index]
const MemorizePage = () => {
  const {chordData} = useContext(ChordDataContext);
  const [mStyle, setMStyle] = React.useState("Diagram");
  const [{sChordArray,mChordArray, mHidden, lastMHidden, index, visitedAll}, dispatch] = React.useReducer(reducer, {
    sChordArray : [],
    mChordArray : ["C"], // Overwrites, but would like to figure out how to get empty
    mHidden: true,
    lastMHidden: true,
    index : 0,
    visitedAll : false
  })

  const handleMStyleChange = (event, newMStyle) => {
    if(newMStyle !== null){ // Fixes null issue. Investigate bug later.
      setMStyle(newMStyle);
    }
  };

  function previousButton(){
    if(index > 0){
      let mHidden_a = false
      let index_a = index - 1
      dispatch({ type: "updateIndex", mHidden_a, index_a})
    }
  }

  function nextButton(){
    if(visitedAll){ // all chords have been seen
      if(index < mChordArray.length - 1){ // as long as index is not at the end the index can be incremented
        let mHidden_a = false
        if(index === mChordArray.length - 2 && lastMHidden){
          mHidden_a = true
        }
        let index_a = index + 1
        dispatch({ type: "updateIndex", mHidden_a, index_a})
      }
    }
    else{
      if(index === mChordArray.length - 1){ // if index is at end of array
        let visitedAll_a = false
        let sChordArray_a = [...sChordArray]
        let min = 0;
        let max = Math.floor(sChordArray_a.length - 1)
        let weightedVal = Math.pow(Math.random(), 2) // create better function later, works for now
        let randomIndex = Math.floor(weightedVal * (max - min + 1)) + min;
        let chord_a = sChordArray_a.splice(randomIndex, 1)[0];
        let index_a = index + 1
        if(sChordArray_a.length === 0){ //sChordArray is empty
          visitedAll_a = true
        }
        dispatch({ type: "addNewChord", sChordArray_a, chord_a, index_a, visitedAll_a})
      }
      else{ // index is not at end of array
        let mHidden_a = false
        if(index === mChordArray.length - 2 && lastMHidden){
          mHidden_a = true
        }
        let index_a = index + 1
        dispatch({ type: "updateIndex", mHidden_a, index_a})
      }
    }
  }

  function detectKeyDown(e) {
    if(e.key === " " || e.key === "ArrowRight"){
      console.log("space or right")
      if(mHidden === true){
        console.log("hidden")
        handleMemorizationToggle()
      }
      else{
        console.log("next")
        nextButton()
      }
    }
    else if(e.key === "ArrowLeft"){
      console.log("left")
    }
    console.log(mHidden)
  }

  function setupSChordArray(){ // TODO: look to see if i can write this more effciently
    let sortable = []
    for (var chord in chordData) {
      if(chordData[chord]["m"] !== 100){
        sortable.push([chord, chordData[chord]["m"]])
      }
    }
    sortable.sort(function(a, b) {
        return a[1] - b[1]
    });
    let sortedArray = []
    for (var i in sortable) {
      sortedArray.push(sortable[i][0])
    }
    return sortedArray
  }

  function setAll(){
    let sChordArray_a = setupSChordArray()
    let mChordArray_a = []
    if(sChordArray_a.length > 0){
      mChordArray_a = [sChordArray_a.shift()]
    }
    let mHidden_a = true
    let lastMHidden_a = true
    let index_a = 0
    let visitedAll_a = false
    if(sChordArray_a.length === 0){
      visitedAll_a = true
    }
    dispatch({ type: "setAll", sChordArray_a, mChordArray_a, mHidden_a, lastMHidden_a, index_a, visitedAll_a})
  }

  function handleMemorizationToggle(){
    if(mHidden){
      let mHidden_a = false;
      let lastMHidden_a = false;
      dispatch({ type: "setMHidden", mHidden_a, lastMHidden_a})
    }
  };

  // Ran once at start
  React.useEffect(() => {
    setAll()
    document.addEventListener("keydown", detectKeyDown);
    // eslint-disable-next-line
  }, [])

  return (
    <Container maxWidth="xl">
      <Typography variant="h3" mt={2} mb={0}>
        Memorize
      </Typography>
      { visitedAll && mChordArray.length === 0 ?
        <Box className="memorizationComplete">
          <Typography paragraph={true} mt={2} mb={0}>
            Congrats! You've got them all memorized!
          </Typography>
          <img width="100%" src={require("../data/tiz2.png")} alt=""/>
        </Box>
        :
        <Box className="memorizationIncomplete">
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
          <Grid container
                spacing={2}
                mt={2}
                columns={24}
                justifyContent="center"
                alignItems="center">
            <Grid item xs={4} sm={6} md={8} lg={8} xl={9}>
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
            <Grid item xs={16} sm={12} md={8} lg={8} xl={6}>
              <Box className="memorizationChordContainer"
                onClick={handleMemorizationToggle}
                sx={{ 
                  cursor: mHidden ? "pointer" : "default"
                }}
              >
                <UkeChord chord={mChordArray[index]} pageStyle="memorize" mStyle={mStyle} mHidden={mHidden}></UkeChord>
              </Box>
            </Grid>
            <Grid item xs={4} sm={6} md={8} lg={8} xl={9}>
              <Paper 
                onClick={nextButton}
                sx={{ 
                  boxShadow: "none", 
                  backgroundColor: "transparent", 
                  height: "100%", 
                  display: "flex", 
                  alignItems: "center",
                  cursor: visitedAll && mChordArray.length - 1 === index ? "default" : "pointer"
                }}>
                <ArrowForwardIosIcon 
                  color="secondary" 
                  sx={{ 
                    width: "min(80%,75px)", 
                    height: "auto", 
                    margin: "0 auto", 
                    display: "block",
                    opacity: visitedAll && mChordArray.length - 1 === index ? "0.2" : "1.0"
                  }}
                />
              </Paper>
            </Grid>
            <Grid item xs={4} sm={6} md={8} lg={8} xl={9} className="resetButtonGridFiller"></Grid>
            <Grid item xs={16} sm={12} md={8} lg={8} xl={6}>
              {visitedAll && <Button variant="text" sx={{ alignItems: "center", width: "100%"}} onClick={setAll}>You've Reached the end. Click to Reset</Button>}
            </Grid> 
            <Grid item xs={4} sm={6} md={8} lg={8} xl={9} className="resetButtonGridFiller"></Grid>
          </Grid>
        </Box>

      }
    </Container>
  );
};

export default MemorizePage;