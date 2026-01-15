import { useState } from "react";

function DropdownDifficulty() {
    const [collapsed, setCollapsed] = useState(true);
    const [ddValue, setDdValue] = useState("Easy");

    return (
        <div>
            <p onClick={() => setCollapsed(!collapsed)}>{ddValue}</p>
            <div id="ddMenu" className={collapsed ? 'hidden' : 'flex flex-col gap-2'}
            >
                <label htmlFor="eins" onClick={() => setDdValue("Easy")}>
                    <input id="eins" type="radio" name="difficulty" />
                    Easy
                </label>

                <label htmlFor="zwei" onClick={() => setDdValue("Medium")}>
                    <input id="zwei" type="radio" name="difficulty" />
                    Medium
                </label>

                <label htmlFor="drei" onClick={() => setDdValue("Hard")}>
                    <input id="drei" type="radio" name="difficulty" />
                    Hard
                </label>
            </div>
        </div>
    );
}

export default DropdownDifficulty;