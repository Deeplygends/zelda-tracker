import MultiStateItem from "../../../../items/MultiStateItem";
import BugBottleItem from "./BugBottle";
import EmptyBottleItem from "./EmptyBottle";


const MultiBottleItem = () => {

    let bottles = [EmptyBottleItem,
        BugBottleItem
    ]
    return <MultiStateItem
        items={bottles}
    ></MultiStateItem>
}

export default MultiBottleItem;