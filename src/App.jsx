import { useState } from "react"
import settings from "./settings.js"
import GameScreen from "./components/GameScreen.jsx"
import ResultScreen from "./components/ResultScreen.jsx"

// Game States
const NOT_STARTED = settings.GAME_STATES.NOT_STARTED
const STARTED = settings.GAME_STATES.STARTED
const RESULTS = settings.GAME_STATES.RESULTS

/*#########*/
/*## APP ##*/
/*#########*/

function App() {
  const [gameState, setGameState] = useState(NOT_STARTED)
  const [wpm, setWpm] = useState(0)
  const [accuracy, setAccuracy] = useState(100)
  const [time, setTime] = useState("0:00")

  return (
    <>
      {gameState != RESULTS && <GameScreen gameState={gameState} wpm={wpm} accuracy={accuracy} time={time} />}
      {gameState == RESULTS && <ResultScreen />}
    </>
  )
}

export default App
