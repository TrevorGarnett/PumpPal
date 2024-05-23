import React, { useState } from 'react';
import { Button, TextInput, Text, View } from 'react-native';
import styles from './styles.js';
import Background from './Background.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default function LoginPage({ onLogin }) {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const auth = getAuth();

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        onLogin(userCredential.user.email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        onLogin(user.email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

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
      <Button title="Sign Up!" onPress={createUser} />
      <Button title="Login!" onPress={login} />
    </Background>
  );
}