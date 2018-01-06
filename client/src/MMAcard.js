import React from 'react'

const returnStyles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    border: '3px solid black',
    justifyContent: 'space-between',
    alignContent: 'spaceBetween',
    background: 'linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%)',
    color: 'white'
  }
}

const MMAcard = (fighters) => {
  return (
    <div>
        fighters.map(fighter => {
          return (
            <div style={returnStyles.container}>
              <p>{fighter.name}</p>
              <p>{fighter.img}</p>
              <p>{fighter.height}</p>
              <p>{fighter.division}</p>
              <p>{fighter.record}</p>
              <button />
            </div>
          )
        })
    </div>
  )
}

export default MMAcard
