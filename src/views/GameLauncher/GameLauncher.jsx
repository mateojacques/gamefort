import {gameLauncher, title} from "./gameLauncher.module.css"

const GameLauncher = () => {
    return (
        <section id="launcher" className={`${gameLauncher} container d-flex justify-content-center align-items-center`}>
            <h1 className={`${title} text-light`}>COMING SOON</h1>
        </section>
    )
}

export default GameLauncher
