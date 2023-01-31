import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { ItemDto } from "./ItemDataTypes";
import {Box} from "@mui/material"

interface MultiStateItemProps {
    items: Array<ItemDto>
}

const MultiStateItem = (props: MultiStateItemProps) => {

    let [isObtained, setIsObtained] = useState(false);
    let [selectState, setSelectState] = useState(0);

    let [anchorElement, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorElement);

    const handleClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {

    }

    const handleRightClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>, v: number) => {
        e.preventDefault()
    }

    const handleSelection = (index: number) => {
        setSelectState(index);
        setIsObtained(true);
        setAnchorEl(null);
    }

    let selected = props.items[selectState]
    return <>
        <selected.component image={selected.defaultIcon} isObtained={isObtained} title={selected.title} onClick={(e) => setAnchorEl(e.currentTarget)}/>
        <Menu
            id="bottleMenu"
            open={open}
            anchorEl={anchorElement}
        >
            {props.items.slice(1).map((it, i) => {
                return <MenuItem><it.component image={it.defaultIcon} isObtained title={it.title} onClick={(e) => handleSelection(i+1)}/></MenuItem>
            })}
        </Menu>
    </>
}

export default MultiStateItem;