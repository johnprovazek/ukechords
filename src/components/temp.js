import * as React from 'react'
import {
  gridContainer,
  gridItem
} from './grid.module.css'
import chordData from '../data/chords-min.json';

var chordArray = ["a", "b", "c"]

const Grid = ({ activeChord, other }) => {

  // console.log(chordData[activeChord]["common"])

  var activeChordObjectList = chordData[activeChord]["common"]
  for (let obj in activeChordObjectList) {
    console.log(obj + ": "+ activeChordObjectList[obj]["order"])
  }

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