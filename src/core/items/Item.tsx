import { Box } from "@mui/material"
import { useState } from "react"

export interface ItemProps {
    image: string
    title: string
}

const Item = (props: ItemProps) => {

    let [isObtained, setIsObtained] = useState(false);

    return <Box sx={{ filter: !isObtained ? "grayscale(1)" : "none" }}>
        <img src={props.image} alt={props.title} onClick={() => { setIsObtained(!isObtained) }} />
    </Box>
}

export default Item