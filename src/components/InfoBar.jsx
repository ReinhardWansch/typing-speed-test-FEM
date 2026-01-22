
import settings from "../settings.js"
import StatValueGamescreen from "./StatValueGamescreen"
import ValuePicker from "./ValuePicker.jsx"
import ValuePickerDesktop from "./ValuePickerDesktop.jsx"

// Difficulty Levels
const DIFFICULTY_LABELS = Object.keys(settings.DIFFICULTY_LEVELS).map(key => settings.DIFFICULTY_LEVELS[key].label)
const EASY= settings.DIFFICULTY_LEVELS.EASY
const MEDIUM= settings.DIFFICULTY_LEVELS.MEDIUM
const HARD= settings.DIFFICULTY_LEVELS.HARD

console.log(DIFFICULTY_LABELS); ///DEBUG

export default function InfoBar({ wpm, accuracy, time }) {
    return (
        <div id="infoBar" className="pt-10 pb-2 flex flex-col lg:flex-row lg:justify-between gap-1">

            {/****** Stats Ctn ******/}
            <div id="statsCtn" className="flex justify-around items-center gap-5">
                <StatValueGamescreen name="WPM:" value={wpm} color="fem-neutral-0" />
                <StatValueGamescreen name="Accuracy:" value={accuracy} color="fem-neutral-0" />
                <StatValueGamescreen name="Time:" value={time} color="fem-neutral-0" />
            </div>

            {/****** Controls Ctn ******/}
            <div id="controlsCtn" className="flex justify-center items-center gap-5">
                <ValuePicker className="lg:hidden" values={["Hard", "Easy", "Medium"]} />
                <ValuePickerDesktop className="hidden lg:flex" values={["Hard", "Easy", "Medium"]} />

            </div>
        </div>
    )
}