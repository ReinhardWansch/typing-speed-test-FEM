import settings from "../settings.js";
import Header from "./Header";
import InfoBar from "./InfoBar";
import TypingInput from "./TypingInput.jsx";

export default function GameScreen({ gameState, wpm, accuracy, time }) {
    return (
        <div id="pageCtn" className="min-h-screen px-2 py-3 bg-neutral-900 text-fem-neutral-0">
            <Header pb={0} />
            <InfoBar wpm={wpm} accuracy={accuracy} time={time} />
            <TypingInput gameState={gameState} text={settings.SAMPLE_TEXT} />
        </div>
    )
}