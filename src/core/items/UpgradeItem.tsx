
import { Box } from "@mui/material"
import { max, min } from "lodash"
import { useState } from "react"
import BaseItem from "./BaseItem"

export interface UpgradeItemProps {
    image: Array<string>
    title: Array<string>
    upgradeLabel?: Array<string>
}


const UpgradeItem = (props: UpgradeItemProps) => {

    let [isObtained, setIsObtained] = useState(0);

    let index = max([0, min([isObtained - 1, props.image.length])]) ?? 0;

    const handleClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        setIsObtained((isObtained + 1) % (props.image.length + 1))
    }

    const handleRightClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        e.preventDefault()
        setIsObtained((max([isObtained - 1, 0]) ?? 0) % (props.image.length + 1))
    }

    return <Box component="div" sx={{
        color: isObtained === props.image.length ? "lightgreen" : "default",
        position: "relative",
        textAlign: "center"
    }}
    >
        <BaseItem image={props.image[index]} title={props.title[index]} onClick={handleClick} onRightClick={handleRightClick} isObtained={isObtained > 0} />
        {isObtained > 0 && <Box component="div" sx={{ position: "absolute", bottom: 0, right: "30%", fontWeight: "bold" }}>{props.upgradeLabel?.[index]}</Box>}
    </Box>
}


export default UpgradeItem