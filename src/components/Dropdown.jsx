import { useState, useRef, useEffect } from "react";

function Dropdown({values}) {
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
        <div ref={dropdownRef}>
            <p onClick={() => setCollapsed(!collapsed)}>{ddValue}</p>
            <div id="ddMenu" className={collapsed ? 'hidden' : 'flex flex-col gap-2'}>
                {values.map(valueI =>
                    <label key={valueI} htmlFor={valueI} onClick={() => setDdValue(valueI)}>
                        <input id={valueI} type="radio" name="difficulty" />
                        {valueI}
                    </label>)
                }
            </div>
        </div>
    );
}

export default Dropdown;