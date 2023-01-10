import * as React from 'react'
import {
  gridContainer,
  gridItem
} from './grid.module.css'
import chordData from '../data/chords-min.json';

var chordArray = ["a", "b", "c"]

const Grid = ({ activeChord, other }) => {

  console.log(chordData[activeChord]["common"])

  var thing = chordData[activeChord]["common"]

  return (
    <div className={gridContainer}>
      {chordArray.map((chord) =>
        <div className={gridItem} key={chord.toString()} value={chord}>
          {chord}
        </div>
      )}
    </div>
  )
}

export default Grid
