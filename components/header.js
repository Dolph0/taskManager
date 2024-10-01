import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
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
  logo: {
    width: 74,  // Tamaño del ícono ajustable
    height: 81.5, // Tamaño del ícono ajustable
    
    marginRight: 10,
  },
  title: {
    fontFamily: 'Poppins_700Bold', // Familia de fuentes
    fontSize: 25,                  // Tamaño de fuente
    color: '#105983',              // Color del texto
    marginLeft: 60,
    
    flex: 1,
  },
});

export default Header;
