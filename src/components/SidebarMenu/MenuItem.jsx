import {menuItem} from "./sidebarMenu.module.css"
import { Link } from "react-router-dom"

const MenuItem = ({icon, text, href}) => {
    return (
        <Link to={href} className={`${menuItem} d-flex`}>
            <i className={`${icon} pe-2`}></i>
            <p>{text}</p>
        </Link>
    )
}

export default MenuItem
