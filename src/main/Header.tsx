import reactLogo from './react.svg'
import viteLogo from './vite.svg'
import tsLogo from './Typescript_logo_2020.svg'

type Args = {
    subtitle: string
}
const Header = ({subtitle}: Args) => {
    return (
        <header className="row mb-4">
            <div className="col-6">
                <img src={viteLogo}
                     className="Vite-logo"
                     alt="Vite logo"
                     style={{ width: '100px', height: '100px' }}
                />

                <img src={tsLogo}
                     className="Ts-logo"
                     alt="Ts logo"
                     style={{ width: '100px', height: '90px' }}
                />

                <img src={reactLogo}
                     className="React-logo"
                     alt="React logo"
                     style={{ width: '100px', height: '100px' }}
                />
            </div>
            <div className="col-7 mt-2 subtitle">{subtitle}</div>
        </header>
    )
}

export default Header