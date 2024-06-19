import './dots-menu-style.css';
import { useState } from "react";
import { BootstrapIcon } from "../../utils/Main"

const DotsMenu = () => {
    const [iconFilld, setIconState] = useState(false);

    function MouseHandleOver() {
        setIconState(true)
    }
    function MouseHandleOut() {
        setIconState(false)
    }

    /*  color={iconFilld ? "#aaadb6" : "var(--solidBlueEve)"} */

    return (
        <>
            <div className="box-DotsMenu" onMouseOver={MouseHandleOver} onMouseOut={MouseHandleOut}>
                <BootstrapIcon
                    iconName={iconFilld ? "PlusCircleFill" : "PlusCircle" }
                    color={iconFilld ? "black" : "var(--solidBlueEve)"}
                    size={20}
                />
            </div>
        </>
    )
};
export default DotsMenu;