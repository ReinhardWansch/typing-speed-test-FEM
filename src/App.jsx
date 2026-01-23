import { useState, useEffect } from "react"
import settings from "./settings.js"
import GameScreen from "./components/GameScreen.jsx"
import ResultScreen from "./components/ResultScreen.jsx"


// Data
const DATA = settings.DATA
// Game States
const NOT_STARTED = settings.GAME_STATES.NOT_STARTED
const STARTED = settings.GAME_STATES.STARTED
const RESULTS = settings.GAME_STATES.RESULTS
// Difficulty Levels
const DIFFICULTY_LEVELS = settings.DIFFICULTY_LEVELS

const getRandomPassage = (difficultyLevel) => {
  const filteredData = DATA[difficultyLevel.dataAttribute]
  const randomIndex = Math.floor(Math.random() * filteredData.length)
  return filteredData[randomIndex]
}

/*#########*/
/*## APP ##*/
/*#########*/

function App() {
  const [gameState, setGameState] = useState(NOT_STARTED)
  const [difficulty, setDifficulty] = useState(DIFFICULTY_LEVELS.EASY)
  const [currentPassage, setCurrentPassage] = useState(getRandomPassage(difficulty))
  const [wpm, setWpm] = useState(0)
  const [accuracy, setAccuracy] = useState(100)
  const [time, setTime] = useState("0:00")

  useEffect(() => {
    setCurrentPassage(getRandomPassage(difficulty))
  }, [difficulty])

  return (
    <>
      {gameState != RESULTS && <GameScreen
        gameState={gameState}
        onGameStart={setGameState}
        difficulty={difficulty}
        onDifficultyChange={setDifficulty}
        currentPassage={currentPassage}
        wpm={wpm}
        accuracy={accuracy}
        time={time} />}
      {gameState == RESULTS && <ResultScreen />}
    </>
  )
}

export default App