import Header from "./components/Header.jsx"
import ValuePicker from "./components/Valuepicker.jsx"
import StatValueGamescreen from "./components/StatValueGamescreen.jsx"

const DIFFICULTY_LEVELS = ["Easy", "Medium", "Hard"];

function App() {

  return (
    <div id="pageCtn" className="min-h-screen px-2 py-3 bg-neutral-900 text-fem-neutral-0 font-sora">
      <Header pb={92} />
      <ValuePicker values={DIFFICULTY_LEVELS} />
      <StatValueGamescreen name="WPM:" value={40} color="" />
      <StatValueGamescreen name="Antwort" value={42} color="fem-green-500" />
    </div>
  )
}

export default App
