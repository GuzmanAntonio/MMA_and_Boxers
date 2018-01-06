import React, {Component} from 'react'
import $ from 'jquery'
import {
  withRouter
} from 'react-router-dom'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100vw'
  }
}

const formStyle = {
  container: {
    background: '#bdc3c7',
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    marginTop: '10px'
  }
}

const labelStyle = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  }
}

const titleStyle = {
  container: {
    color: '#ECF0F1',
    textShadow: '2px 4px 8px #000000'
  }
}

class CreateFighterContainer extends Component {
  state = {
    name: undefined,
    img: undefined,
    height: undefined,
    division: undefined,
    record: undefined
  }

  onNameChange = (e) => this.setState({name: e.target.value})
  onImgChange = (e) => this.setState({img: e.target.value})
  onHeightChange = (e) => this.setState({height: e.target.value})
  onDivisionChange = (e) => this.setState({division: e.target.value})
  onRecordChange = (e) => this.setState({record: e.target.value})

  handleSubmit = (e) => {
    e.preventDefault()
    const {name, img, height, division, record} = this.state
    const newFighter = {name, img, height, division, record}
    $.ajax({
      url: '/api/mma-fighters',
      method: 'POST',
      data: newFighter
    }).done((response) => {
      this.props.loadMMAFromServer()
      this.props.history.push('./mma-fighters')
    })
  }

  render () {
    return (
      <div style={styles.container}>
        <h2 style={titleStyle.container}> Create Fighter </h2>
        <form style={formStyle.container}>
          <div style={labelStyle.container}>
            <label>Name </label>
            <input type='text' onChange={this.onNameChange} placeholder='Enter Fighter Name' />
          </div>
          <div style={labelStyle.container}>
            <label>Image </label>
            <input type='text'onChange={this.onImgChange} placeholder='Enter Fighter Image' />
          </div>
          <div style={labelStyle.container}>
            <label>Height </label>
            <input type='text' onChange={this.onHeightChange} placeholder='Enter Fighter Height' />
          </div>
          <div style={labelStyle.container}>
            <label>Division </label>
            <input type='text' onChange={this.onDivisionChange} placeholder='Enter Fighter Divison' />
          </div>
          <div style={labelStyle.container}>
            <label>Record </label>
            <input type='text' onChange={this.onRecordChange} placeholder='Enter Fighter Record' />
          </div>
          <button onClick={this.handleSubmit}> SUBMIT </button>
        </form>
      </div>
    )
  }
}

export default withRouter(CreateFighterContainer)
