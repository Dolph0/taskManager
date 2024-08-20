import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import LoginPage from './components/LoginPage';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LoginPage />
    </SafeAreaView>
  );
}

