import { useState } from "react"
import BaseItem from "./BaseItem"

export interface ItemProps {
    image: string
    title: string
}

const Item = (props: ItemProps) => {

    let [isObtained, setIsObtained] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        if (e.type === 'contextmenu')
            e.preventDefault();
        setIsObtained(!isObtained)
    }

    const handleRightClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        e.preventDefault();
        handleClick(e)
    }
    return <BaseItem image={props.image} title={props.title} onClick={handleClick} onRightClick={handleRightClick} isObtained={isObtained} />

}

export default Item