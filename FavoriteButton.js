import { Pressable } from "react-native";
import { Text } from "react-native";
import { useState } from "react";

export default function FavoriteButton() {

    [favorited, setFavorited] = useState(false);
    return (
        <Pressable onPress={() => setFavorited(!favorited)}>
            <Text>{favorited ? "❤️" : "♡"}</Text>
        </Pressable >
    );
}