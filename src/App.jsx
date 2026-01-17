import Header from "./components/Header.jsx"
import ValuePicker from "./components/ValuePicker.jsx"
import ValuePickerValue from "./components/ValuePickerValue.jsx"
import StatValueGamescreen from "./components/StatValueGamescreen.jsx"

const DIFFICULTY_LEVELS = ["Easy", "Medium", "Hard"];
const MODES = ["Timed (60s)", "Passage"];

function App() {

  return (
    <div id="pageCtn" className="min-h-screen px-2 py-3 bg-neutral-900 text-fem-neutral-0 font-sora">
      <Header pb={92} />
      <div className="flex justify-around gap-2">
        <ValuePicker values={DIFFICULTY_LEVELS} />
        <ValuePicker values={MODES} />
      </div>
      <StatValueGamescreen name="WPM:" value={40} color="" />
    </div>
  )
}

export default App
