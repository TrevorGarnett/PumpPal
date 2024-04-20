import { Pressable, Text } from "react-native";
import { useState } from "react";

export default function FavoriteButton() {

    const [favorited, setFavorited] = useState(false);
    return (
        <Pressable onPress={() => setFavorited(!favorited)}>
            <Text>{favorited ? "❤️" : "♡"}</Text>
        </Pressable >
    );
}