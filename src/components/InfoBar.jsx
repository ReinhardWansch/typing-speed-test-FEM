
import StatValueGamescreen from "./StatValueGamescreen"
import ValuePicker from "./ValuePicker"

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
            </div>
        </div>
    )
}