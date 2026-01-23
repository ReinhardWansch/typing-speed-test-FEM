import { useState, useEffect } from "react"
import settings from "./settings.js"
import GameScreen from "./components/GameScreen.jsx"
import ResultScreen from "./components/ResultScreen.jsx"


// Data
const DATA = settings.DATA
// Difficulty Levels
const DIFFICULTY_LEVELS = settings.DIFFICULTY_LEVELS
// Game Modes
const GAME_MODES = settings.GAME_MODES
// Game States
const NOT_STARTED = settings.GAME_STATES.NOT_STARTED
const STARTED = settings.GAME_STATES.STARTED
const RESULTS = settings.GAME_STATES.RESULTS

const getRandomPassage = (difficultyLevel) => {
  const filteredData = DATA[difficultyLevel.dataAttribute]
  const randomIndex = Math.floor(Math.random() * filteredData.length)
  return filteredData[randomIndex]
}

/*#########*/
/*## APP ##*/
/*#########*/

function App() {
  const [gameMode, setGameMode] = useState(GAME_MODES.TIMED)
  const [difficulty, setDifficulty] = useState(DIFFICULTY_LEVELS.EASY)
  const [currentPassage, setCurrentPassage] = useState(getRandomPassage(difficulty))
  const [gameState, setGameState] = useState(NOT_STARTED)
  const [wpm, setWpm] = useState(0)
  const [accuracy, setAccuracy] = useState(100)
  const [time, setTime] = useState("0:00")

  useEffect(() => {
    setCurrentPassage(getRandomPassage(difficulty))
  }, [difficulty])

  return (
    <>
      {gameState != RESULTS && <GameScreen
        difficulty={difficulty}
        onDifficultyChange={setDifficulty}
        gameMode={gameMode}
        onGameModeChange={setGameMode}
        onGameStart={setGameState}
        gameState={gameState}
        currentPassage={currentPassage}
        wpm={wpm}
        accuracy={accuracy}
        time={time} />}
      {gameState == RESULTS && <ResultScreen />}
    </>
  )
}

export default App