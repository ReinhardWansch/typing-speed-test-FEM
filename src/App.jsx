import Header from "./components/Header.jsx"
import ValuePicker from "./components/ValuePicker.jsx"
import ValuePickerDesktop from "./components/ValuePickerDesktop.jsx"
import StatValueGamescreen from "./components/StatValueGamescreen.jsx"
import TypingInput from "./components/TypingInput.jsx"

const DIFFICULTY_LEVELS = ["Easy", "Medium", "Hard"];
const MODES = ["Timed (60s)", "Passage"];

const SAMPLE_TEXT = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren";

function App() {
  return (
    <div id="pageCtn" className="min-h-screen px-2 py-3 bg-neutral-900 text-fem-neutral-0 font-sora">
      <Header pb={92} />
      <div className="flex justify-around gap-2">
        <ValuePicker values={DIFFICULTY_LEVELS} className="md:hidden" />
      <ValuePickerDesktop values={DIFFICULTY_LEVELS} className="hidden md:block"/>
        <ValuePicker values={MODES} />
      </div>
      <StatValueGamescreen name="WPM:" value={40} color="" />
      <TypingInput text={SAMPLE_TEXT} />
    </div>
  )
}

export default App
