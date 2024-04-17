import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CardView from './CardView';

const yAxis = [[1, 2, 3, 4, 5], [5, 4, 3, 2, 1]]; // Two lines
const xAxis = ["Jan", "Feb", "Mar", "Apr", "May"];

export default function App() {
  return (
    <View style={styles.container}>
      <CardView xAxis={["a", "b", "c"]} yAxis={[[1, 2, 3], [2, 1, 3]]} />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
