import { Text, View } from 'react-native';
import { Card } from '@rneui/themed';
import styles from './styles.js';

export default function CardView({ title = "", children }) {
    return (
        <Card style={styles.fullWidth}>
            <Card.Title style={styles.cardTitle}>{title}</Card.Title>
            <Text>Hello</Text>
        </Card >
    );
}