import React from 'react'
import Home from './Home'
import MMAfighters from './MMAfighters'
import NavBar from './NavBar'
import Title from './Title'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}

const App = () =>
  <Router>
    <div style={styles.container}>
      <Title />
      <NavBar />
      <Route exact path='/' component={Home} />
      <Route path='/mma' component={MMAfighters} />
    </div>
  </Router>

export default App
