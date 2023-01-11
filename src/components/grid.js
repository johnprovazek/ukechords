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
  // for (let obj in activeChordObjectList) {
  //   console.log(obj + ": "+ activeChordObjectList[obj]["order"])
  // }

  return (
    <div className={gridContainer}>
      {Object.keys(activeChordObjectList).map((key) =>
        <div key={activeChordObjectList[key]["chordName"]} className={gridItem}>
          <h1>{key}</h1>
          <Chord chord={activeChordObjectList[key]["chordDiagram"]} instrument={instrument} lite={lite}/>
          <h5> Memorize Slider</h5>
          <div className="slidecontainer">
            <input type="range" min="1" max="100" className="slider"></input>
          </div>
          <h5> Play Slider</h5>
          <div className="slidecontainer">
            <input type="range" min="1" max="100" className="slider"></input>
          </div>
        </div>
      )}
    </div>
  )
}

export default Grid
