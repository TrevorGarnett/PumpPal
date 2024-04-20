// import { StatusBar } from 'expo-status-bar';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
// import LineChart from './CustomLineChart';
import CardView from './CardView.js';
import styles from './styles.js';
import { LinearGradient } from 'expo-linear-gradient';
import { Header } from '@rneui/themed';

const yAxis = [[1, 2, 3, 4, 5], [5, 4, 3, 2, 1]]; // Two lines
const xAxis = ["Jan", "Feb", "Mar", "Apr", "May"];


let DATA = [
  { id: 1, title: "Bench Press" },
  { id: 10, title: "Squat" },
  { id: 100, title: "Dead Lift" }];
export default function App() {
  // DATA = Get data
  return (
    <LinearGradient colors={['#aadffe', '#f0f0f0', '#f0f0f0', '#f0f0f0']} style={styles.background}>
      <SafeAreaView>
        <FlatList
          style={{ height: "100%" }}
          // ListHeaderComponent={0 === 0 ? <Text style={styles.bigHeader}>Stats</Text> : <Header> hi</Header>} //TODO: Add header for when we scroll down. E.g., when you scroll down in the summary tab in apple health
          ListHeaderComponent={
            <View style={{ alignSelf: "flex-start" }}>
              <Text style={styles.bigHeader}>Stats</Text>
            </View>
          }
          data={DATA}
          renderItem={({ item }) => <CardView title={item.title} />}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{ paddingHorizontal: 20 }}
          ListEmptyComponent={<Text> No Data at the Moment</Text>}
        // stickyHeaderIndices={[0]} //TODO: Experimaent with this
        />
      </SafeAreaView >
    </LinearGradient>

  );
}


