import UpgradeItem from "../../../../items/UpgradeItem";
import Hookshot from "../OoT_Hookshot_Icon.png";
import Longshot from "../OoT_Longshot_Icon.png";


const HookshotItem = () => {

    return <UpgradeItem image={[Hookshot, Longshot]} title={["Hookshot", "Longshot"]} upgradeLabel={["Hook", "Long"]} />

}

export default HookshotItem;