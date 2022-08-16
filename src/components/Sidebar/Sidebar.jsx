import {sidebar} from "./sidebar.module.css"
import Logo from "../Logo/Logo"
import SidebarMenu from "../SidebarMenu/SidebarMenu"


const Sidebar = ({menuOpen}) => {
    return (
        <aside className={`${sidebar} ${menuOpen ? "menuActive" : ""} h-100 d-flex flex-column py-3 px-4`}>
            <Logo showIcon/>
            <SidebarMenu title="Start" items={[{icon: "bi-house-door", text: "Go back home", href: "/"}]}/>
            <SidebarMenu title="Game Launcher" items={[{icon: "bi-controller", text: "Game Library", href: "/launcher"}]}/>
            <SidebarMenu title="Categories" items={[{icon: "bi-bricks", text: "2D", href: "/category=2d"}, {icon: "bi-boxes", text: "3D", href: "/category=3d"}, {icon: "bi-globe", text: "Browser", href: "/platform=browser"}, {icon: "bi-suit-spade", text: "Cards", href: "/category=card"}, {icon: "bi-bandaid", text: "Fighting", href: "/category=fighting"}, {icon: "bi-activity", text: "Horror", href: "/category=horror"}, {icon: "bi-pc", text: "Low spec", href: "/category=low-spec"}, {icon: "bi-magic", text: "MMORPG", href: "/category=mmorpg"}, {icon: "bi-flag", text: "MOBAs", href: "/category=moba&sort-by=popularity"}, {icon: "bi-headset", text: "Shooter", href: "/category=shooter"}, {icon: "bi-trophy", text: "Sports", href: "/category=sports"}, {icon: "bi-123", text: "Turn based", href: "/category=turn-based"}]}/>
        </aside>
    )
}

export default Sidebar
