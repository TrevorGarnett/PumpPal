import { View, Text, Modal, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles.js';
import SaveButton from './SaveButton.js';

export default function AddExercise({ visible, setVisible }) {
    return (
        <Modal
            visible={visible}
            onRequestClose={() => setVisible(false)}
            animationType="slide"
            presentationStyle="pageSheet"
            style={{ flex: 1 }}
        >
            <View style={{ flex: 1, flexDirection: 'column', padding: 20, backgroundColor: "#f3f2f7" }}>
                <Text style={{ alignSelf: "center", fontSize: 25, fontWeight: "bold", padding: 20 }}> Adding an Exercise </Text>
                <View style={{ padding: 20, flexDirection: 'row', backgroundColor: "white" }}>
                    <Text style={{ alignSelf: "flex-start", flex: 1, fontSize: 20 }}>Exercise</Text>
                    <TextInput style={{ alignSelf: "flex-end", fontSize: 20 }} placeholder="Exercise Name" />
                </View>
                <SaveButton />
            </View>
        </Modal>
    );
}