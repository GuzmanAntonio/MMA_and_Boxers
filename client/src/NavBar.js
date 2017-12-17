import React from 'react'
import {
  Link
} from 'react-router-dom'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    background: 'linear-gradient(to top, #b3ffab 0%, #12fff7 100%)'
  }
}

const NavBar = () =>
  <div style={styles.container}>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/mma'>MMA Fighters</Link>
    </nav>
  </div>

export default NavBar
