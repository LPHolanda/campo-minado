import { StyleSheet, Text, View } from "react-native";
import { createMinedBoard } from "../functions";
import { params } from "../params";
import Field from "./components/Field";
import MineField from "./components/MineField";

export default function Index() {

    const minesAmount = () => {
        const cols = params.getColumnsAmount();
        const rows = params.getRowsAmount();
        return Math.ceil(cols * rows * params.difficultLevel);
    }

    const createState = () => {
        const cols = params.getColumnsAmount();
        const rows = params.getRowsAmount();
        return {
            board: createMinedBoard(rows, cols, minesAmount())
        }
    }

    const { board } = createState();

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Iniciando campo minado</Text>
            <Text style={styles.instructions}>
                Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}
            </Text>

            <Field />
            <View style={styles.board}>
                <MineField board={board} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    board: {
        alignItems: 'center',
        backgroundColor: '#AAA',
    },
    welcome: {
        fontSize: 20
    },
    instructions: {
        fontSize: 12
    }
});