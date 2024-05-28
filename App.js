// React import statements
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Custom components
import StatPage from './StatPage';
import LoginPage from './LoginPage';
import Background from './Background.js';
import styles from './styles.js';
import HomeScreen from './HomePage.js';

// Firebase configuration
import './firebaseConfig';
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";

// Flag for development mode
const DEVELOPMENT_MODE = true;

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