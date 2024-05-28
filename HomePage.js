import React from 'react';
import { Text, View } from 'react-native';
import Background from './Background.js';
import styles from './styles.js';

function HomeScreen() {
  return (
    <Background>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    </Background>
  );
}

export default HomeScreen;