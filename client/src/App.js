import React, {Component} from 'react'
import Home from './Home'
import MMAfighters from './MMAfighters'
import NavBar from './NavBar'
import Title from './Title'
import Boxers from './Boxers'
import CreateFighterContainer from './CreateFighterContainer'
import $ from 'jquery'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100vw'
  }
}

class App extends Component {
  state = {
    mmaFighters: undefined
  }

  componentDidMount () {
    this.loadMMAFromServer()
  }

  loadMMAFromServer = () => {
    $.ajax({
      url: '/api/mma-fighters',
      method: 'GET'
    }).done((response) => {
      this.setState({fighters: response.fighters})
    })
  }

  render () {
    return (
      <Router>
        <div style={styles.container}>
          <Title />
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route path='/create-fighter' render={() => <CreateFighterContainer loadMMAFromServer={this.loadMMAFromServer} />} />
          {
            this.state.fighters
              ? <Route path='/mma-fighters' render={() => <MMAfighters fighters={this.state.fighters} />} />
              : 'No MMA Fighters'
          }
          <Route path='/boxers' render={() => <Boxers />} />
        </div>
      </Router>
    )
  }
}

export default App
