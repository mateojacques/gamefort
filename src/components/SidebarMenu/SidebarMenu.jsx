import {menuTitle} from "./sidebarMenu.module.css"
import MenuItem from "./MenuItem"

const SidebarMenu = ({title, items}) => {
    return (
        <div className="mt-4">
            <h3 className={menuTitle}>{title}</h3>
            {items.length > 0 && 
            items.map(({text, icon, href}) => (
                <MenuItem key={text} icon={icon} text={text} href={href}/>
            ))
            }
        </div>
    )
}

export default SidebarMenu
