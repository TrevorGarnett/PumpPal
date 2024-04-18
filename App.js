// import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, FlatList } from 'react-native';
// import LineChart from './CustomLineChart';
import CardView from './CardView.js';
import styles from './styles.js';
import { LinearGradient } from 'expo-linear-gradient';

const yAxis = [[1, 2, 3, 4, 5], [5, 4, 3, 2, 1]]; // Two lines
const xAxis = ["Jan", "Feb", "Mar", "Apr", "May"];


let DATA = [{ id: 1, title: "Bench Press" },
{ id: 10, title: "Squat" },
{ id: 100, title: "Dead Lift" }];
export default function App() {
  // DATA = Get data
  return (
    <LinearGradient colors={['#aadffe', '#ffffff', '#ffffff', '#ffffff']} style={styles.background}>
      <SafeAreaView>
        <Text style={styles.bigHeader}>Tracker</Text>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <CardView title={item.title} />}
          keyExtractor={item => item.id.toString()} />
      </SafeAreaView >
    </LinearGradient>

  );
}


