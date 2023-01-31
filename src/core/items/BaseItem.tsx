import { Box } from "@mui/material"

export interface BaseItemProps {
    image: string
    title: string
    isObtained: boolean,
    onClick: React.MouseEventHandler<HTMLImageElement> | undefined,
    onRightClick?: React.MouseEventHandler<HTMLImageElement> | undefined
}

const BaseItem = (props: BaseItemProps) => {

    return <Box sx={{ filter: !props.isObtained ? "grayscale(1)" : "none" }}>
        <img src={props.image} alt={props.title} onClick={props.onClick} onContextMenu={props.onRightClick} />
    </Box>
}

export default BaseItem