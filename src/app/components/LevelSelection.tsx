import { StyleSheet, View, Modal, TouchableOpacity, Text } from "react-native";

type Props = {
    isVisible: boolean,
    onCancel: () => void,
    onLevelSelected: (difficultLevel: number) => void
}

export default function LevelSelection({ isVisible, onCancel, onLevelSelected }: Props) {
    return (
        <Modal 
            onRequestClose={onCancel}
            visible={isVisible}
            animationType={'slide'}
            transparent={true}
        >
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}>Selecione o nível</Text>
                    <TouchableOpacity
                        style={[styles.button, styles.bgEasy]}
                        onPress={() => onLevelSelected(0.1)}
                    >
                        <Text style={styles.buttonLabel}>Fácil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.bgNormal]}
                        onPress={() => onLevelSelected(0.2)}
                    >
                        <Text style={styles.buttonLabel}>Normal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.bgHard]}
                        onPress={() => onLevelSelected(0.3)}
                    >
                        <Text style={styles.buttonLabel}>Difícil</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 10,
        padding: 5,
    },
    buttonLabel: {
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold',
    },
    bgEasy: {
        backgroundColor: '#49B65D',
    },
    bgNormal: {
        backgroundColor: '#2765F7',
    },
    bgHard: {
        backgroundColor: '#F26337',
    },
});