import { Text, View } from 'react-native';
import { Pressable, Text } from "react-native";
import { useState } from "react";
import styles from './styles.js';
import FavoriteButton from './FavoriteButton.js';

export default function CardView({ title = "" }) {
    const [favorited, setFavorited] = useState(false);
    return (
        <View style={styles.cardObject}>
            <View style={{ alignContent: 'flex-start', flex: 1 }}>
                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={{ fontSize: 25 }}>225lbs</Text>
            </View>
            <View style={{ alignContent: 'flex-end' }}>
                <Pressable onPress={() => setFavorited(!favorited)}>
                    <FavoriteButton />
                </Pressable>
            </View>
        </View>
    );
}