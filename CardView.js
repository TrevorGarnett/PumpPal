import {
    LineChart,
    // BarChart,
    // PieChart,
    // ProgressChart,
    // ContributionGraph,
    // StackedBarChart
} from "react-native-chart-kit";
// import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from "react-native";

export default function LineChart_CV({ xValues, yValues, xlabel = "", ylabel = "" }) {
    const datasets = yValues.map((y) => ({ data: y })); // Map each line to its own data set
    const screenWidth = Dimensions.get("window").width; // From react-native
    const width = screenWidth * 0.9; // 90% of screen width
    const height = width / 16 * 9; // 16-9 aspect ratio
    const decimalPlaces = 0;

    const paddingLeft = Math.max(30, screenWidth * 0.05);
    const paddingRight = paddingLeft;
    return (
        <LineChart
            data={{
                labels: xValues,
                datasets: datasets
            }}
            withShadow={false}
            width={width} // from react-native
            height={height} // 16-9 aspect ratio
            yAxisLabel={ylabel}
            fromNumber={3}
            yAxisInterval={1} // optional, defaults to 1
            // formatXLabel={(xValues) => xValues.push("s")}
            chartConfig={{
                backgroundColor: "#ffffff",
                backgroundGradientFrom: "#ffffff",
                backgroundGradientTo: "#ffffff",
                decimalPlaces: decimalPlaces, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(51, 156, 242, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                    borderRadius: 16,
                },
                propsForDots: {
                    r: "2",
                    fill: "#339cf2",
                    strokeWidth: "2",
                    stroke: "#339cf2"
                }
            }}
            bezier
            style={{
                marginVertical: 8,
                borderRadius: 8,
                paddingRight: paddingRight + 4 * decimalPlaces,
                paddingLeft: paddingLeft + 4 * decimalPlaces
            }}
        />
    );
}