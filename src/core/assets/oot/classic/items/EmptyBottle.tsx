import Item from "../../../../items/Item";
import { ItemDto } from "../../../../items/ItemDataTypes";
import EmptyBottle from "../OoT_Bottle_Icon.png";



const EmptyBottleItem = () => {
    return <Item image={EmptyBottle} title="Empty Bottle" />
}

export default EmptyBottleItem;

export const defaultEmptyBottle: ItemDto = {
    defaultIcon: EmptyBottle,
    title: "EmptyBottle",
    component: EmptyBottleItem,
}