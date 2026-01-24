
import settings from "../settings.js"
import StatValueGamescreen from "./StatValueGamescreen"
import ValuePicker from "./ValuePicker.jsx"
import ValuePickerDesktop from "./ValuePickerDesktop.jsx"

const DIFFICULTY_LEVELS = settings.DIFFICULTY_LEVELS
const GAME_MODES = settings.GAME_MODES


export default function InfoBar({ 
    difficulty, 
    onDifficultyChange, 
    gameMode, 
    onGameModeChange, 
    wpm, 
    accuracy, 
    time,
    gameState }) {

    return (
        <div id="infoBar" className="pt-10 pb-2 flex flex-col lg:flex-row lg:justify-between gap-1">

            {/****** Stats Ctn ******/}
            <div id="statsCtn" className="flex justify-around items-center gap-5">
                <StatValueGamescreen name="WPM:" value={wpm} color="fem-neutral-0" />
                <StatValueGamescreen name="Accuracy:" value={accuracy} color="fem-red-500" />
                <StatValueGamescreen name="Time:" value={time} color="fem-yellow-400" />
            </div>

            {/****** Controls Ctn ******/}
            <div id="controlsCtn" className="flex justify-center items-center gap-5">
                <ValuePicker 
                    className="lg:hidden"
                    values={Object.values(DIFFICULTY_LEVELS)} 
                    currentValue={difficulty} 
                    onChange={onDifficultyChange} 
                    gameState={gameState} />
                <ValuePickerDesktop
                    className="hidden lg:flex"
                    values={Object.values(DIFFICULTY_LEVELS)}
                    onChange={onDifficultyChange}
                    currentValue={difficulty} 
                    gameState={gameState} />

                <ValuePicker 
                    className="lg:hidden"
                    values={Object.values(GAME_MODES)} 
                    currentValue={gameMode} 
                    onChange={onGameModeChange} 
                    gameState={gameState} />
                <ValuePickerDesktop 
                    className="hidden lg:flex" 
                    values={Object.values(GAME_MODES)} 
                    onChange={onGameModeChange} 
                    currentValue={gameMode} 
                    gameState={gameState} />
            </div>
        </div>
    )
}