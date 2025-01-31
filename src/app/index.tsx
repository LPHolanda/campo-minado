import { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { cloneBoard, createMinedBoard, flagsUsed, hadExplosion, invertFlag, openField, showMines, wonGame } from "../functions";
import { params } from "../params";
import MineField from "./components/MineField";
import Header from "./components/Header";
import { Board } from "./models/Board";
import LevelSelection from "./components/LevelSelection";

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
            board: createMinedBoard(rows, cols, minesAmount()),
            won: false,
            lost: false,
            showLevelSelection: false,
        }
    }

    const [board, setBoard] = useState<{ board: Board[][], won: boolean, lost: boolean, showLevelSelection: boolean }>(createState());


    // const { board } = createState();
    
    const onOpenField = (row: number, column: number) => {
        const clonedBoard = cloneBoard(board.board);
        openField(clonedBoard, row, column);
        const lost = hadExplosion(clonedBoard);
        const won = wonGame(clonedBoard);

        if (lost) {
            showMines(clonedBoard);
            Alert.alert('Perdeu!', 'Tente novamente!');
        } 

        if (won) {
            Alert.alert('Parabéns', 'Você venceu!');
        }

        setBoard({...board, board: clonedBoard, lost, won });
    }

    const onSelectField = (row: number, column: number) => {
        const clonedBoard = cloneBoard(board.board);
        invertFlag(clonedBoard, row, column);
        const won = wonGame(clonedBoard);

        if (won) {
            Alert.alert('Parabéns', 'Você venceu!');
        }

        setBoard({...board, board: clonedBoard, won });
    }

    const onLevelSelected = (level: number) => {
        params.difficultLevel = level;
        setBoard(createState());
    }

    return (
        <View style={styles.container}>
            <LevelSelection  
                isVisible={board.showLevelSelection}
                onCancel={() => setBoard({...board, showLevelSelection: false})}
                onLevelSelected={onLevelSelected}
            />
            <Header 
                flagsLeft={minesAmount() - flagsUsed(board.board)} 
                onNewGame={() => setBoard(createState())}
                onFlagPress={() => setBoard({...board, showLevelSelection: true})}
            />
            <View style={styles.board}>
                <MineField 
                    board={board.board} 
                    onOpenField={onOpenField}
                    onSelectField={onSelectField}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
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