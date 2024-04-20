import { Text, View } from 'react-native';
import { Card } from '@rneui/themed';
import styles from './styles.js';
import FavoriteButton from './FavoriteButton.js';

export default function CardView({ title = "" }) {
    return (
        <View style={styles.cardObject}>
            <View style={{ alignContent: 'flex-start', flex: 1 }}>
                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={{ fontSize: 25 }}>225lbs</Text>
            </View>
            <View style={{ alignContent: 'flex-end' }}>
                <FavoriteButton />
            </View>
        </View>
    );
}