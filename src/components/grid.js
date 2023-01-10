import * as React from 'react'
import {
  gridContainer,
  gridItem
} from './grid.module.css'
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

const lite = false

const Grid = ({ activeChord, other }) => {

  // console.log(chordData[activeChord]["common"])

  var activeChordObjectList = chordData[activeChord]["common"]
  for (let obj in activeChordObjectList) {
    console.log(obj + ": "+ activeChordObjectList[obj]["order"])
  }

  return (
    <div className={gridContainer}>
      {Object.keys(activeChordObjectList).map((key) =>
        <div className={gridItem}>
          <h1>{key}</h1>
          <Chord chord={activeChordObjectList[key]["chordDiagram"]} instrument={instrument} lite={lite}/>
        </div>
      )}
    </div>
  )
}

export default Grid
