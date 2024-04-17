import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LineChart_CV from './CardView';

const yAxis = [[1, 2, 3, 4, 5], [5, 4, 3, 2, 1]]; // Two lines
const xAxis = ["Jan", "Feb", "Mar", "Apr", "May"];

export default function App() {
  return (
    <View style={styles.container}>
      <LineChart_CV xValues={["a", "b", "c"]} yValues={[[1, 2, 3], [2, 1, 3]]} />
      <LineChart_CV xValues={xAxis} yValues={yAxis} />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
