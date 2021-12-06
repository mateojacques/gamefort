import {hero} from "./hero.module.css"

const Hero = () => {
    return (
        <div className={`${hero} w-100 p-4 p-md-5 mb-3`}>
            <h1 className="text-light">Welcome!</h1>
            <p className="text-light"><span>gamefort</span> is a collection of <b>free to play multiplayer</b> games.</p>
            <p className="text-muted">all the game data is retrieved from the <a href="https://www.freetogame.com/api-doc" target="_blank" rel="noreferrer">FreeToGame API</a>.</p>
        </div>
    )
}

export default Hero
