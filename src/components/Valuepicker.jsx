import { useEffect, useRef, useState } from "react";

export default function ValuePicker({values}) {
    const [collapsed, setCollapsed] = useState(true);
    const [selectedValue, setSelectedValue] = useState(values[0]);
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
        <div ref={dropdownRef} className="relative flex-1 text-center">
            <p onClick={() => setCollapsed(!collapsed)}
                className="border border-fem-neutral-400 rounded-md">
                {selectedValue}
                <img src="/src/assets/images/icon-down-arrow.svg" alt="downarrow"
                    className={`inline ${collapsed ? 'pl-2' : 'rotate-180 pr-2'}`} />
            </p>
            <div id="ddMenu"
                className={collapsed ? 'hidden' :
                    'flex flex-col rounded-md w-full bg-fem-neutral-800 divide-y divide-neutral-700 absolute'}>
                {values.map(valueI =>
                    <ValuePickerValue text={valueI} checked={selectedValue === valueI} clickHandler={setSelectedValue} key={valueI} />
                )}
            </div>
        </div>
    );
}



function ValuePickerCheckmark({ checked = false }) {
    return (
        <div className={"rounded-full w-4 h-4 flex items-center justify-center"+
            (checked ? ' bg-fem-blue-400' : ' border border-fem-neutral-400')
        }>
            {checked ? <div className="rounded-full bg-black w-[40%] h-[40%]"></div> : null}
        </div>
    )
}

function ValuePickerLabel({ text }) {
    return (
        <p>{text}</p>
    )
}

function ValuePickerValue({text, checked, clickHandler}) {
    return (
        <div className="flex items-center gap-2 bg-fem-neutral-800" onClick={()=>clickHandler(text)}>
            <ValuePickerCheckmark checked={checked} />
            <ValuePickerLabel text={text} />
        </div>
    );
}