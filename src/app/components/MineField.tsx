import { StyleSheet, View } from "react-native";
import Field from "./Field";

type Props = {
    board: { 
        row: number, 
        column: number, 
        opened: boolean, 
        flagged: boolean, 
        mined: boolean, 
        exploded: boolean, 
        nearMines: number, 
    }[][]
}

export default function MineField({ board }: Props) {
    const rows = board.map((row, r) => {
        const columns = row.map((field, c) => {
            return <Field {...field} key={c} />
        });
        return <View key={r}>{columns}</View>
    });

    return (
        <View style={styles.container}>{rows}</View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#EEE'
    },
});