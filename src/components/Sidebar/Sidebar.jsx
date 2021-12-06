import {sidebar} from "./sidebar.module.css"
import Logo from "../Logo/Logo"
import SidebarMenu from "../SidebarMenu/SidebarMenu"


const Sidebar = ({menuOpen}) => {
    return (
        <aside className={`${sidebar} ${menuOpen ? "menuActive" : ""} h-100 d-flex flex-column py-3 px-4`}>
            <Logo showIcon/>
            <SidebarMenu title="Start" items={[{icon: "bi-house-door", text: "Go back home", href: "/"}]}/>
            <SidebarMenu title="Game Launcher" items={[{icon: "bi-controller", text: "Game Library", href: "/launcher"}]}/>
            <SidebarMenu title="Categories" items={[{icon: "bi-activity", text: "2D", href: "/category=2d"}, {icon: "bi-activity", text: "3D", href: "/category=3d"}, {icon: "bi-book", text: "Browser", href: "/platform=browser"}, {icon: "bi-activity", text: "Cards", href: "/category=card"}, {icon: "bi-activity", text: "Fighting", href: "/category=fighting"}, {icon: "bi-activity", text: "Horror", href: "/category=horror"}, {icon: "bi-activity", text: "Low spec", href: "/category=low-spec"}, {icon: "bi-activity", text: "MMORPG", href: "/category=mmorpg"}, {icon: "bi-activity", text: "MOBAs", href: "/category=moba&sort-by=popularity"}, {icon: "bi-123", text: "Shooter", href: "/category=shooter"}, {icon: "bi-activity", text: "Sports", href: "/category=sports"}, {icon: "bi-activity", text: "Turn based", href: "/category=turn-based"}]}/>
        </aside>
    )
}

export default Sidebar
