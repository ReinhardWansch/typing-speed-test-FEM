import { useState } from "react"
import settings from "./settings.js"
import GameScreen from "./components/GameScreen.jsx"
import ResultScreen from "./components/ResultScreen.jsx"

const NOT_STARTED = settings.GAME_STATES.NOT_STARTED
const STARTED = settings.GAME_STATES.STARTED
const RESULTS = settings.GAME_STATES.RESULTS

function App() {
  // const [gameState, setGameState] = useState(NOT_STARTED)
  const [gameState, setGameState] = useState(RESULTS)

  return (
    <>
      {gameState != RESULTS && <GameScreen />}
      {gameState == RESULTS && <ResultScreen />}
    </>
  )
}

export default App
