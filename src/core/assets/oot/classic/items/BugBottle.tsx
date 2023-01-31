import BaseItem, { BaseItemProps } from "../../../../items/BaseItem";
import Item from "../../../../items/Item";
import { ItemDto } from "../../../../items/ItemDataTypes";
import BugBottle from "../OoT_Bug_Icon.png";


const BugBottleItem = (props: BaseItemProps) => {

    return <BaseItem {...props} image={BugBottle} title="Bug Bottle" />
}

export default BugBottleItem;

export const defaultBugBottle: ItemDto = {
    defaultIcon: BugBottle,
    title: "EmptyBottle",
    component: BugBottleItem,
}