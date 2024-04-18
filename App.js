// import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
// import LineChart from './CustomLineChart';
import CardView from './CardView.js';
import styles from './styles.js';

const yAxis = [[1, 2, 3, 4, 5], [5, 4, 3, 2, 1]]; // Two lines
const xAxis = ["Jan", "Feb", "Mar", "Apr", "May"];

export default function App() {
  return (
    <View style={[styles.container, styles.fullWidth]}>
      <CardView title="Bench Press" />
      {/* <LineChart xValues={["a", "b", "c"]} yValues={[[1, 2, 3], [2, 1, 3]]} />
      <LineChart xValues={xAxis} yValues={yAxis} />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
    </View >
  );
}
