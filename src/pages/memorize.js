import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

// Step 2: Define your component
const MemorizePage = () => {
  return (
    <Layout pageTitle="Memorize">
      <p>This page will show you a chord name followed by a diagram on how to play that chord. Use this section to train your memorization. As you learn chords, mark how well you know them with the slider. The better you memorize the chords, the less they will show up on this page. You can also adjust the memorization sliders for each chord on the <Link to="/about">Chords page.</Link></p>
    </Layout>
  )
}

// const Layout = ({ pageTitle, children }) => {

export const Head = () => <title>Memorize</title>

// Step 3: Export your component
export default MemorizePage