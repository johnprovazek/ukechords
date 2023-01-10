import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/chords" className={navLinkText}>
              Chords
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/memorize" className={navLinkText}>
              Memorize
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/play" className={navLinkText}>
              Play
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout