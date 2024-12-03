import { View, Text, Modal, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AddExercise({ visible, setVisible }) {
    return (
        <Modal
            visible={visible}
            onRequestClose={() => setVisible(false)}
            animationType="slide"
            presentationStyle="pageSheet"
        >
            <View style={{ flex: 1, padding: 20, backgroundColor: "#f3f2f7" }}>
                <Text style={{ alignSelf: "center", fontSize: 25, fontWeight: "bold", padding: 20 }}> Adding an Exercise </Text>
                <View style={{ padding: 20, flexDirection: 'row', backgroundColor: "white" }}>
                    <Text style={{ alignSelf: "flex-start", flex: 1, fontSize: 20 }}>Exercise</Text>
                    <TextInput style={{ alignSelf: "flex-end", fontSize: 20 }} placeholder="Exercise Name" />
                </View>
            </View>
        </Modal>
    );
}