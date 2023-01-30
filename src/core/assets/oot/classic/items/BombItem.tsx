import UpgradeItem from "../../../../items/UpgradeItem";
import Bomb from "../OoT_Bomb_Icon.png";


const BombItem = () => {

    return <UpgradeItem image={[Bomb, Bomb, Bomb]} title={["Bomb Bag", "Big Bomb Bag", "Giant Bomb Bag"]} upgradeLabel={["", "30", "40"]} />

}

export default BombItem;