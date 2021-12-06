import {footer} from "./footer.module.css"

import Logo from "../Logo/Logo"

const Footer = () => {
    return (
        <footer className={`${footer} mt-auto container-fluid d-flex flex-column py-3 align-items-center justify-content-center`}>
            <Logo/>
            <a href="https://github.com/mateojacques/gamefort" target="_blank" rel="noreferrer" className="mt-3">See on github</a>
        </footer>
    )
}

export default Footer
