import { Grid, Table, TableBody, TableCell, TableRow } from "@mui/material";
import { OoTClassicItemList } from "../../core/assets/oot/classic/OoTClassicLists";

interface ItemsTrackerProps {

}

const ItemsTracker = (props: ItemsTrackerProps) => {

    let items = OoTClassicItemList;

    let itemCount = 6;
    let startIndex = 0;

    let index: Array<number> = [];

    while (startIndex < items.length) {
        index.push(startIndex);
        startIndex += itemCount;
    }

    return <Grid container item xs={12} sm={3} lg={2} onContextMenu={(e) => e.preventDefault()}>
        <Table>
            <TableBody>
                {index.map((i) => {
                    return <ItemTrackerRow items={items.slice(i, i + itemCount)} />
                })}
            </TableBody>
        </Table >
    </Grid>
}

export interface ItemTrackerRowProps {
    items: Array<any>
}
const ItemTrackerRow = (props: ItemTrackerRowProps) => {

    let { items } = props;

    return <TableRow>
        {items.map((item) => {
            return <TableCell width={20}>{item()}</TableCell>;
        })}
    </TableRow>
}


export default ItemsTracker


