import Header from "./components/Header.jsx"
import DropdownDifficulty from "./components/DropdownDifficulty.jsx"

function App() {

  return (
    <div id="pageCtn" className="min-h-screen px-2 py-3 bg-neutral-900 text-fem-neutral-0">
      <Header pb={92} />
      <DropdownDifficulty />  
    </div>
  )
}

export default App
