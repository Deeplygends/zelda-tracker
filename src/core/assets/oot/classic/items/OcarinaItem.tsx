import UpgradeItem from "../../../../items/UpgradeItem";
import FairyOcarina from "../OoT_Fairy_Ocarina_Icon.png";
import OcarinaOfTime from "../OoT_Ocarina_of_Time_Icon.png";


const OcarinaItem = () => {

    return <UpgradeItem image={[FairyOcarina, OcarinaOfTime]} title={["Fairy Ocarina", "Ocarina Of Time"]} upgradeLabel={["", ""]} />

}

export default OcarinaItem;