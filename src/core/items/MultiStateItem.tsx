import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";


interface MultiStateItemProps {
    items: Array<() => JSX.Element>
}

const MultiStateItem = (props: MultiStateItemProps) => {

    let [isObtained, setIsObtained] = useState(false);
    let [selectState, setSelectState] = useState(0);

    let [anchorElement, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorElement);

    const handleClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {

    }

    const handleRightClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        e.preventDefault()
    }

    return <>
        {props.items[selectState]()}
        <Menu
            id="bottleMenu"
            open={open}
            anchorEl={anchorElement}
        >
            {props.items.slice(1).map((it, i) => {
                return <MenuItem>{it()}</MenuItem>
            })}
        </Menu>
    </>
}

export default MultiStateItem;