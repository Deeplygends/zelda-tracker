import MultiStateItem from "../../../../items/MultiStateItem";
import BugBottleItem, {  defaultBugBottle } from "./BugBottle";
import EmptyBottleItem, { defaultEmptyBottle } from "./EmptyBottle";


const MultiBottleItem = () => {

    let bottles = [defaultEmptyBottle,
        defaultBugBottle
    ]
    return <MultiStateItem
        items={bottles}
    ></MultiStateItem>
}

export default MultiBottleItem;