import { View, Text, FlatList, Pressable } from 'react-native';
import { useState } from 'react';
import CardView from './CardView.js';
import styles from './styles.js';
import Icon from 'react-native-vector-icons/MaterialIcons';
import 'react-native-gesture-handler';
import AddExercise from './AddExercise.js';
import Background from './Background.js';

let DATA = [
    { id: 1, title: "Bench Press", type: "WeightLifting" },
    { id: 10, title: "Squat", type: "WeightLifting" },
    { id: 100, title: "Dead Lift", type: "WeightLifting" },
    { id: 1000, title: "Running", type: "Cardio" }];


export default function StatPage() {
    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!modalVisible);
    }
    // DATA = Get data
    return (
        <Background>
            <FlatList
                style={{ height: "100%" }}
                // ListHeaderComponent={0 === 0 ? <Text style={styles.bigHeader}>Stats</Text> : <Header> hi</Header>} //TODO: Add header for when we scroll down. E.g., when you scroll down in the summary tab in apple health
                ListHeaderComponent={
                    <View style={{ flexDirection: 'row', paddingTop: 40, paddingBottom: 20 }} >
                        <Text style={[styles.bigHeader, { alignSelf: "flex-start", flex: 1 }]}>Stats</Text>
                        <Pressable onPress={() => toggleModal()}>
                            <Icon name="add" size={35} color="black" style={{ alignSelf: "flex-end" }} />
                        </Pressable>
                    </View>
                }
                data={DATA}
                renderItem={({ item }) => <CardView title={item.title} type={item.type} />}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                ListEmptyComponent={<Text> No Data at the Moment</Text>}
            />
            <AddExercise visible={modalVisible} setVisible={setModalVisible} />
        </Background >
    );
}


