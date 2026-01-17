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

export default ValuePickerValue;