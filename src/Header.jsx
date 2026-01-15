import logoLarge from './assets/images/logo-large.svg'
import logoSmall from './assets/images/logo-small.svg'
import iconPersonalBest from './assets/images/icon-personal-best.svg'

function Header({pb}) {
    return (
        <header className="flex justify-between">
            <div id="logoCtn">
                <img src={logoLarge} alt="Logo" className="hidden lg:block" />
                <img src={logoSmall} alt="Logo" className="lg:hidden" />
            </div>

            <div id="bestHeaderCtn" className="flex items-center gap-2">
                <img src={iconPersonalBest} alt="cup-icon" className="inline-block" />
                <span className="text-fem-neutral-500">
                    <span className="hidden lg:inline">Personal</span>
                    Best:
                </span>
                <span className="font-bold text-lg">{pb} WPM</span>
            </div>
        </header>
    )
}

export default Header