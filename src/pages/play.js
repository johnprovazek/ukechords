import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

// Step 2: Define your component
const PlayPage = () => {
  return (
    <Layout pageTitle="Play">
      <p>This page will randomize some chords for you to play to help you learn. Use the skills slider on the chords to adjust how well you know them. The better skills on the chords, the less they will show up on this page. You can also adjust the skills sliders for each chord on the <Link to="/about">Chords page.</Link></p>
    </Layout>
  )
}

export const Head = () => <title>Play</title>

// Step 3: Export your component
export default PlayPage