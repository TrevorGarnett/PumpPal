import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, View } from 'react-native';
import styles from './styles.js';

export default function Background({ children }) {
    return (
        <LinearGradient colors={['#abe0ff', '#CDE8F7', '#E9EEF1', '#f0f0f0']} style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: "98%" }}>
                    {children}
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
}