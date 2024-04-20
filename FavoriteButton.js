import Icon from 'react-native-vector-icons/Ionicons';

const emptyStar = <Icon name="star-outline" size={30} color="black" />;
const filledStar = <Icon name="star" size={30} color="gold" />;

export default function FavoriteButton(favorited = false) {
    if (favorited) {
        return filledStar;
    }
    return emptyStar
}