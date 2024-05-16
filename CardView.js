import { View, Pressable, Text } from "react-native";
import { useState } from "react";
import styles from './styles.js';
import Icon from 'react-native-vector-icons/Ionicons';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
const emptyStar = <Icon name="star-outline" size={30} color="black" />;
const filledStar = <Icon name="star" size={30} color="gold" />;
const dumbbell = <MatIcon style={{ padding: 10 }} name="dumbbell" size={50} color="black" />;
const runner = <MatIcon style={{ padding: 10 }} name="run" size={50} color="black" />;

export default function CardView({ title, type }) {
    const [favorited, setFavorited] = useState(false);
    return (
        <View style={styles.cardObject}>
            {type == "WeightLifting" ? dumbbell : runner}
            <View style={{ alignContent: 'flex-start', flex: 1 }}>
                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={{ fontSize: 25 }}>225lbs</Text>
            </View>
            <Pressable onPress={() => setFavorited(!favorited)} style={{ aligSelf: 'flex-end' }}>
                {favorited ? filledStar : emptyStar}
            </Pressable>
        </View>
    );
}

CardView.propTypes = {
    title: PropTypes.string
};