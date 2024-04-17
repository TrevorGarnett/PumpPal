import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-elements';

export default function CardView({ title = "", children }) {
    return (
        <Card title="Title">
            <Text>Hi</Text>
        </Card>
    );
}