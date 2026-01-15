
function StatValueGamescreen({name, value, color}) {
    return (
        <div className="flex flex-col items-center lg:flex-row lg:gap-2">
            <span className="text-fem-neutral-400">{name}</span>
            <span className={`font-bold text-xl text-${color}`}>{value}</span>
        </div>
    )
}

export default StatValueGamescreen;