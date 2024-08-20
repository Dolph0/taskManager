import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import styles from '../styles/LoginPageStyles.js';

const LoginPage = () => {
    return (
      <View style={styles.container}>
        {/* Logo Section */}
        <View style={styles.logoContainer}>
          <Image source={require('../assets/logo.jpeg')} style={styles.logo} />
        </View>
  
        {/* Title Section */}
        <Text style={styles.title}>GESTIONA</Text>
        <Text style={styles.subtitle}>Task manager</Text>
  
        {/* Input Fields */}
        <TextInput
          placeholder="Username"
          style={styles.input}
          placeholderTextColor="#888"
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
          placeholderTextColor="#888"
        />
  
        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>
      </View>
    );
  };

  export default LoginPage;