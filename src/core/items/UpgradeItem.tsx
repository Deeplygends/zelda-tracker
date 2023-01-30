
import { Box } from "@mui/material"
import { max, min } from "lodash"
import { useState } from "react"

export interface UpgradeItemProps {
    image: Array<string>
    title: Array<string>
    upgradeLabel?: Array<string>
}


const UpgradeItem = (props: UpgradeItemProps) => {

    let [isObtained, setIsObtained] = useState(0);

    let index = max([0, min([isObtained - 1, props.image.length])]) ?? 0;
    return <Box component="div" sx={{
        filter: isObtained === 0 ? "grayscale(1)" : "none",
        color: isObtained === props.image.length ? "lightgreen" : "default",
        position: "relative",
        textAlign: "center"
    }}
    >
        <img src={props.image[index]} alt={props.title[index]} onClick={(e) => { setIsObtained((isObtained + 1) % (props.image.length + 1)) }} />
        {isObtained > 0 && <Box component="div" sx={{ position: "absolute", bottom: 0, right: "30%", fontWeight: "bold" }}>{props.upgradeLabel?.[index]}</Box>}
    </Box>
}


export default UpgradeItem