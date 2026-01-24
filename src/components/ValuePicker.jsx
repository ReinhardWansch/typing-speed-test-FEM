import settings from '../settings.js';
import { useEffect, useRef, useState } from "react";
import iconDownArrow from '/src/assets/images/icon-down-arrow.svg';

const GAME_STATES = settings.GAME_STATES;

const ACTIVE_STYLE= "border border-fem-neutral-400 rounded-md"
const STARTED_STYLE= "border border-neutral-600 text-neutral-600 rounded-md"

export default function ValuePicker({
    values,
    currentValue,
    onChange,
    gameState,
    className = "" }) {

    const [collapsed, setCollapsed] = useState(true);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setCollapsed(true);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={dropdownRef} className={`relative flex-1 text-center ${className}`}>
            <p onClick={() => { if (gameState == GAME_STATES.NOT_STARTED) setCollapsed(!collapsed) }}
                className={gameState == GAME_STATES.NOT_STARTED ? ACTIVE_STYLE : STARTED_STYLE}>
                {currentValue.label}
                <img src={iconDownArrow} alt="downarrow"
                    className={`inline ${collapsed ? 'pl-2' : 'rotate-180 pr-2'}`} />
            </p>
            <div id="ddMenu"
                className={collapsed ? 'hidden' :
                    'flex flex-col rounded-md w-full bg-fem-neutral-800 divide-y divide-neutral-700 absolute z-10'}>
                {values.map(valueI =>
                    <ValuePickerValue value={valueI} checked={currentValue === valueI} onClick={onChange} key={valueI.value} />
                )}
            </div>
        </div>
    );
}


function ValuePickerValue({ value, checked, onClick }) {
    return (
        <div className="flex items-center gap-2 bg-fem-neutral-800" onClick={() => onClick(value)}>
            <ValuePickerCheckmark checked={checked} />
            <p>{value.label}</p>
        </div>
    );
}

function ValuePickerCheckmark({ checked = false }) {
    return (
        <div className={"rounded-full w-4 h-4 flex items-center justify-center" +
            (checked ? ' bg-fem-blue-400' : ' border border-fem-neutral-400')
        }>
            {checked ? <div className="rounded-full bg-black w-[40%] h-[40%]"></div> : null}
        </div>
    )
}
