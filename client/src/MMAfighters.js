import React from 'react'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}

const MMAfighters = ({fighters}) => {
  return (
    <div style={styles.container}>
      <h3>MMA Fighters</h3>
      {
        fighters.map(fighter => {
          return (
            <p>{fighter.name}</p>
          )
        })
      }
    </div>
  )
}

export default MMAfighters
