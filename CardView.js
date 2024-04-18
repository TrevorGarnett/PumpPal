import { Text, View } from 'react-native';
import { Card } from '@rneui/themed';
import styles from './styles.js';
import FavoriteButton from './FavoriteButton.js';

export default function CardView({ title = "", children }) {
    return (
        <Card style={styles.fullWidth}>
            <Card.Title style={styles.cardTitle}>{title}</Card.Title>
            <Text style={{ fontSize: 25 }}>225lbs</Text>
            <FavoriteButton />
        </Card >
    );
}