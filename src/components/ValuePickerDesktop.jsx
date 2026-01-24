import { useState } from "react";
import settings from "../settings";

const GAME_STATES = settings.GAME_STATES;

export default function ValuePickerDesktop({ gameState, values, currentValue, onChange, className = "" }) {
    const [selectedValue, setSelectedValue] = useState(currentValue);

    return (
        <div id="difficultyControlsCtn" className={` ${className}`}>
            <span className="text-fem-neutral-400">Difficulty:</span>
            {values.map(valueI =>
                <ValuePickerValueDesktop key={valueI.value} value={valueI} checked={selectedValue === valueI} onClick={() => {
                    if (gameState == GAME_STATES.NOT_STARTED) {
                        setSelectedValue(valueI);
                        onChange(valueI);
                    }
                }} />
            )}
        </div>
    );
}

function ValuePickerValueDesktop({ value, checked, onClick }) {
    return (
        <button
            className={`border py-1 px-2 rounded-lg ${checked ? 'border-fem-blue-600 text-fem-blue-600' : 'border-fem-neutral-500'}`}
            onClick={onClick}
        >
            {value.label}
        </button>
    );
}