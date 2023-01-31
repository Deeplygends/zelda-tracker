import UpgradeItem from "../../../../items/UpgradeItem";
import Bow from "../OoT_Fairy_Bow_Icon.png";


const BowItem = () => {

    return <UpgradeItem image={[Bow, Bow, Bow]} title={["Arc", "Big Quiver", "Giant Quiver"]} upgradeLabel={["", "40", "50"]} />

}

export default BowItem;