import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from "react-native";

export default function CardView(xValues, yValues, xlabel = "", ylabel = "") {
    console.log("Done");
    // let datasets = yValues.map((y) => { data: y }); // Map each line to its own data set
    console.log("here");
    console.log(yValues);
    console.log("issue");
    console.log(xValues);
    console.log("after both");
    let width = Dimensions.get("window").width; // From react-native
    return (
        <View>
            <Text>Bezier Line Chart</Text>
            <LineChart
                data={{
                    labels: xValues,
                    datasets: datasets
                }}
                width={width} // from react-native
                height={width / 16 * 9} // 16-9 aspect ratio
                yAxisLabel={xlabel}
                yAxisSuffix={ylabel}
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "#ffffff",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />
        </View>
    );
}