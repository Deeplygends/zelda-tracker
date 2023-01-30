import { Grid, Table, TableBody, TableCell, TableRow } from "@mui/material";
import { OoTClassicItemList } from "../../core/assets/oot/classic/OoTClassicLists";

interface ItemsTrackerProps {

}

const ItemsTracker = (props: ItemsTrackerProps) => {

    let items = OoTClassicItemList;

    return <Grid container item xs={6} lg={3}>
        <Table>
            <TableBody>
                <TableRow>
                    {items.map((item) => {
                        return <TableCell width={20}>{item()}</TableCell>;
                    })}
                </TableRow>
            </TableBody>
        </Table >
    </Grid>
}

export default ItemsTracker