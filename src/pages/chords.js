// import * as React from 'react'
import React, { useState } from "react";
import Grid from '../components/grid'
import Layout from '../components/layout'
import {
  chordList,
  chordListItemActive,
  chordListItemInactive
} from './chords.module.css'

// var myArray = ['a','b','c','d','e'];

const ChordPage = () => {
  const [activeChord, setActiveChord] = useState("C");

  const changeChord = (value) => {
    console.log(value)
    setActiveChord(value)
  } 

  return (
    <Layout pageTitle="Chords">
      <p>This page will show your progess on learning chords.</p>
      <div className={chordList}>
        <button className={activeChord === "All" ? chordListItemActive : chordListItemInactive} onClick={() => changeChord("All")} value="All">All</button>
        <button className={activeChord === "C" ? chordListItemActive : chordListItemInactive} onClick={() => changeChord("C")} value="C">C</button>
        <button className={activeChord === "Db" ? chordListItemActive : chordListItemInactive} onClick={() => changeChord("Db")} value="Db">Db</button>
        <button className={activeChord === "D" ? chordListItemActive : chordListItemInactive} onClick={() => changeChord("D")} value="D">D</button>
        <button className={activeChord === "Eb" ? chordListItemActive : chordListItemInactive} onClick={() => changeChord("Eb")} value="Eb">Eb</button>
        <button className={activeChord === "E" ? chordListItemActive : chordListItemInactive} onClick={() => changeChord("E")} value="E">E</button>
        <button className={activeChord === "F" ? chordListItemActive : chordListItemInactive} onClick={() => changeChord("F")} value="F">F</button>
        <button className={activeChord === "Gb" ? chordListItemActive : chordListItemInactive} onClick={() => changeChord("Gb")} value="Gb">Gb</button>
        <button className={activeChord === "G" ? chordListItemActive : chordListItemInactive} onClick={() => changeChord("G")} value="G">G</button>
        <button className={activeChord === "Ab" ? chordListItemActive : chordListItemInactive} onClick={() => changeChord("Ab")} value="Ab">Ab</button>
        <button className={activeChord === "A" ? chordListItemActive : chordListItemInactive} onClick={() => changeChord("A")} value="A">A</button>
        <button className={activeChord === "Bb" ? chordListItemActive : chordListItemInactive} onClick={() => changeChord("Bb")} value="Bb">Bb</button>
        <button className={activeChord === "B" ? chordListItemActive : chordListItemInactive} onClick={() => changeChord("B")} value="B">B</button>
      </div>
      <Grid activeChord={activeChord}></Grid>
    </Layout>
  )
}

export const Head = () => <title>Chords</title>

export default ChordPage