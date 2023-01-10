// Step 1: Import React
import * as React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import Chord from '@tombatossals/react-chords/lib/Chord'

const MyChord = () => {
  const chord = {
    "frets": [3,3,3,3],
    "fingers": [1,1,1,1],
    "barres": [3],
    "capo": true
  }
  const instrument = {
      "strings": 4,
      "fretsOnChord": 4,
      "name": "ukulele",
      "keys": [],
      "tunings": {
          standard: ["G", "C", "E", "A"]
      }
  }
  const lite = false // defaults to false if omitted
  return (
      <Chord
          chord={chord}
          instrument={instrument}
          lite={lite}
      />
  )
}

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Uke Chords">
      <p>This is a website developed to help you learn and memorize ukulele chords. Good luck and have fun!</p>
      <MyChord />
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage