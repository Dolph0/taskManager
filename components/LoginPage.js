import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator, Alert } from 'react-native';
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins';  
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/LoginPageStyles.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginPage = () => {
    // Estados para manejar los inputs
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    // Cargar las fuentes
    let [fontsLoaded] = useFonts({
        Poppins_700Bold,  
    });

    const navigation = useNavigation();

    if (!fontsLoaded) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    const handleLogin = async () => {
        if (!username || !password) {
            Alert.alert("Error", "Por favor ingresa nombre de usuario y contraseña");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('http://localhost:8082/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Error en el inicio de sesión');
            }

            // Guarda el token en AsyncStorage
            await AsyncStorage.setItem('token', data.token);

            // Navega según el rol
            const userRole = data.user.role;
            switch (userRole) {
                case 'admin':
                    navigation.navigate('AdminEntry');
                    break;
                case 'manager':
                    navigation.navigate('ManagerEntry');
                    break;
                default:
                    navigation.navigate('EmployeeEntry');
                    break;
            }
        } catch (error) {
            Alert.alert("Error", error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
      <View style={styles.container}>
        {/* Logo Section */}
        <View style={styles.logoContainer}>
          <Image source={require('../assets/Logo.png')} style={{ width: 182, height: 200 }} />
        </View>

        {/* Title Section */}
        <Text style={[styles.subtitle, { fontFamily: 'Poppins_700Bold', fontSize: 25, color: '#105983', marginBottom:30 }]}>
          Task manager
        </Text>

        {/* Input Fields */}
        <TextInput
          placeholder="Username"
          style={[styles.input, { borderColor: '#105983', borderWidth: 2, borderRadius: 10 }]}
          placeholderTextColor="#888"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={[styles.input, { borderColor: '#105983', borderWidth: 2, borderRadius: 10 }]}
          placeholderTextColor="#888"
          value={password}
          onChangeText={setPassword}
        />

        {/* Login Button */}
        <TouchableOpacity 
          style={[styles.loginButton, { backgroundColor: '#105983', borderRadius: 10 }]}
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={[styles.loginButtonText, { fontFamily: 'Poppins_700Bold', fontSize: 25, color: '#FFFFFF', textAlign: 'center' }]}>
              Log in
            </Text>
          )}
        </TouchableOpacity>
      </View>
    );
};

export default LoginPage;


