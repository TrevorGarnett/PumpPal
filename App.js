import React, { useState } from 'react';
import Background from './Background.js';
import { Button, TextInput, Text } from 'react-native';
import styles from './styles.js';
import "./firebaseConfig";
import StatPage from './StatPage.js'; ``
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [user, onChangeLoggedInUser] = React.useState(null);
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  // let auth = initializeAuth(App, {
  //   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  // });
  // if (!auth) 
  const auth = getAuth() || initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });;

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        onChangeLoggedInUser(userCredential.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        onChangeLoggedInUser(user.email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  if (user) {
    return (
      <StatPage />
    );
  }

  return (
    <Background>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder={!emailFocused ? 'Email' : ''}
        onFocus={() => setEmailFocused(true)}
        onBlur={() => setEmailFocused(email !== '')}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder={!passwordFocused ? 'Password' : ''}
        onFocus={() => setPasswordFocused(true)}
        onBlur={() => setPasswordFocused(email !== '')}
      />
      <Button title="Sign Up!" onPress={() => createUser()} />
      <Button title="Login!" onPress={() => login()} />
    </Background >
  );
}