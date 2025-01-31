import { openField } from "@/src/functions";
import { StyleSheet, View } from "react-native";
import { Board } from "../models/Board";
import Field from "./Field";

type Props = {
    onOpenField: (r: number, c: number) => void,
    onSelectField: (r: number, c: number) => void,
    board: Board[][]
}

export default function MineField({ board, onOpenField, onSelectField }: Props) {
    const rows = board.map((row, r) => {
        const columns = row.map((field, c) => {
            return <Field {...field} key={c} onOpen={() => onOpenField(r, c)} onSelect={() => onSelectField(r, c)} />
        });
        return <View style={{ flexDirection: 'row' }} key={r}>{columns}</View>
    });

    return (
        <View style={styles.container}>{rows}</View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE'
    },
});