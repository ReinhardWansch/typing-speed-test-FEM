import { useState } from "react";

export default function ValuePickerDesktop({ values }) {
    const [selectedValue, setSelectedValue] = useState(values[0]);

    return (
        <div id="difficultyControlsCtn">
            <span className="text-fem-neutral-400">Difficulty:</span>
            {values.map(valueI =>
                <ValuePickerValueDesktop key={valueI} text={valueI} checked={selectedValue === valueI} clickHandler={() => setSelectedValue(valueI)} />
            )}
        </div>
    );
}

function ValuePickerValueDesktop({ text, checked, clickHandler }) {
    return (
        <button className={`border py-1 px-2 rounded-lg ${checked ? 'border-fem-blue-600 text-fem-blue-600' : 'border-fem-neutral-500'}`} onClick={clickHandler}>
            {text}
        </button>
    );
}