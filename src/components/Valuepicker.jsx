import { useState, useRef, useEffect } from "react";

function ValuePicker({ values }) {
    const [collapsed, setCollapsed] = useState(true);
    const [ddValue, setDdValue] = useState(values[0]);
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
                className="px-6 border border-fem-neutral-400 rounded-md">
                {ddValue}
                <img src="/src/assets/images/icon-down-arrow.svg" alt="downarrow"
                    className={`inline ${collapsed ? 'pl-2' : 'rotate-180 pr-2'}`} />
            </p>
            <div id="ddMenu"
                className={collapsed ? 'hidden' : 
                'flex flex-col rounded-md w-full bg-fem-neutral-800 divide-y divide-neutral-700'}>
                {values.map(valueI =>
                    <label key={valueI} htmlFor={valueI} onClick={() => setDdValue(valueI)}
                        className="p-2 text-start">
                        <input id={valueI} type="radio" name="difficulty" />
                        <span className="pl-2">{valueI}</span>
                    </label>)
                }
            </div>
        </div>
    );
}

export default ValuePicker;