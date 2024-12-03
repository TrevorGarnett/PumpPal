import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import styles from './styles.js';
import Background from './Background.js';
import {auth} from "../FireBase_Config/firebaseConfig.js";
import StatPage from './StatPage.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


export default function Login() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  function createUser() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        onChangeLoggedInUser(userCredential.user);
        setUser(userCredential.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        print(errorCode, errorMessage);
      });
  }

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        setUser(userCredential.user);
        onChangeLoggedInUser(user.email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        print(errorCode, errorMessage);
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
        onChangeText={setEmail}
        value={email}
        placeholder={!emailFocused ? 'Email' : ''}
        onFocus={() => setEmailFocused(true)}
        onBlur={() => setEmailFocused(email !== '')}
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        placeholder={!passwordFocused ? 'Password' : ''}
        onFocus={() => setPasswordFocused(true)}
        onBlur={() => setPasswordFocused(email !== '')}
      />
      <View style={styles.rowAlign}>
        <Button title="Login" onPress={login} />
        <Button title="Create Account" onPress={createUser} />  
      </View>
    </Background >
  );
}