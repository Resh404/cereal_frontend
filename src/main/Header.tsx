import reactLogo from './react.svg'
import viteLogo from './vite.svg'

type Args = {
    subtitle: string
}
const Header = ({subtitle}: Args) => {
    return (
        <header className="row mb-4">
            <div className="col-6">
                <img src={viteLogo}
                     className="Vite-logo"
                     alt="Vite logo"/>

                <img src={reactLogo}
                     className="React-logo"
                     alt="React logo"/>
            </div>
            <div className="col-7 mt-2 subtitle">{subtitle}</div>
        </header>
    )
}

export default Header