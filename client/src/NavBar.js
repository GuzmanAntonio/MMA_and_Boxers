import React from 'react'
import {
  Link
} from 'react-router-dom'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    background: 'linear-gradient(to top, #b3ffab 0%, #12fff7 100%)',
    justifyContent: 'space-around',
    boxShadow: '0px 10px 26px 0px rgba(0,0,0,0.75)',
    border: '4px solid, black'
  }
}

const navStyle = {
  container: {
    display: 'flex',
    width: '100vw',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
}

const linkStyle = {
  container: {
    textDecoration: 'none',
    color: '#6C7A89',
    fontFamily: 'Roboto Mono, monospace'
  }
}

const NavBar = () =>
  <div style={styles.container}>
    <nav style={navStyle.container}>
      <Link to='/' style={linkStyle.container}> ●Home </Link>
      <Link to='/mma-fighters' style={linkStyle.container}> ●MMA-Fighters </Link>
      <Link to='/boxers' style={linkStyle.container}> ●Boxers </Link>
      <Link to='/create-fighter' style={linkStyle.container}> ●Create-Fighter </Link>
    </nav>
  </div>

export default NavBar
