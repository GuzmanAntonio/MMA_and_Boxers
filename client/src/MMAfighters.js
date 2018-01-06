import React from 'react'
import MMAcard from './MMAcard'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
}

const titleStyles = {
  container: {
    color: '#ECF0F1',
    textShadow: '2px 4px 8px #000000'
  }
}

const MMAfighters = ({fighters}) => {
  return (
    <div style={styles.container}>
      <h2 style={titleStyles.container}>MMA Fighters</h2>
      {
        fighters.map((fighter) => {
          <MMAcard />
        })
      }
    </div>
  )
}

export default MMAfighters
