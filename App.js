import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Background from './Background.js';
import styles from './styles.js';
import "./firebaseConfig";
import StatPage from './StatPage.js';
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginPage from './LoginPage';


// Flag for development mode
const DEVELOPMENT_MODE = false;

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

export default function App() {
  const [user, onChangeLoggedInUser] = useState(null);

  // let auth = initializeAuth(App, {
  //   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  // });
  // if (!auth) 
  const auth = getAuth() || initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });

  // If user is logged in or DEVELOPMENT_MODE is true, skip the login process
  if (user || DEVELOPMENT_MODE) {
    const Tab = createBottomTabNavigator();
    return (
      <NavigationContainer>
        <Tab.Navigator  screenOptions={{tabBarShowLabel: false,  headerShown: false}}>
          <Tab.Screen name="Workout Plan" component={HomeScreen}/>
          <Tab.Screen name="Stats" component={StatPage} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

  // Otherwise, show the login screen
  return <LoginPage onLogin={onChangeLoggedInUser} />;
}