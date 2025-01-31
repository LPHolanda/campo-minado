import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Flag from "./Flag";

type Props = {
    flagsLeft: number,
    onFlagPress: () => void,
    onNewGame: () => void,
}

export default function Header({ flagsLeft, onFlagPress, onNewGame }: Props) {
    return (
        <View style={styles.container} >
            <View style={styles.flagContainer}>
                <TouchableOpacity onPress={onFlagPress} style={styles.flagButton}>
                    <Flag bigger />
                </TouchableOpacity>
                <Text style={styles.flagsLeft}>= {flagsLeft}</Text>
            </View>
            <TouchableOpacity onPress={onNewGame} style={styles.newGameButton}>
                <Text style={styles.newGameButtonLabel}>Novo jogo</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingHorizontal: 20,
    }, 
    flagContainer: {
        flexDirection: 'row',
    },
    flagButton: {
        marginTop: 10,
        minWidth: 30,
    },
    flagsLeft: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 5,
        marginLeft: 20,
    },
    newGameButton: {
        backgroundColor: '#999',
        padding: 5,
    },
    newGameButtonLabel: {
        fontSize: 20,
        color: '#DDD',
        fontWeight: 'bold',
    }
});