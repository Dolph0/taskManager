import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Botón de retroceso */}
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      
      {/* Imagen del logo */}
      <Image
        source={require('../assets/Logo.png')} // Ruta del logo
        style={styles.logo}
      />
      {/* Texto "Task Manager" con el estilo proporcionado */}
      <Text style={styles.title}>Task Manager</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 30,
    backgroundColor: '#F5F5F5', // Ajusta el fondo si es necesario
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 24,
    color: '#105983',
    fontWeight: 'bold',
  },
  logo: {
    width: 74,  // Tamaño del ícono ajustable
    height: 81.5, // Tamaño del ícono ajustable
    marginRight: 10,
  },
  title: {
    fontFamily: 'Poppins_700Bold', // Familia de fuentes
    fontSize: 25,                  // Tamaño de fuente
    color: '#105983',              // Color del texto
    marginLeft: 30,
    flex: 1,
  },
});

export default Header;
