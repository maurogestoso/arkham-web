import React from 'react'

const {REACT_APP_ASSETS_BASE_URL:ASSETS_BASE_URL} = process.env

const Game = () => {
  return (
    <div>
      <h2>Game</h2>
      <img src={`${ASSETS_BASE_URL}/cards/01001.jpg`} />
    </div>
  )
}

export default Game