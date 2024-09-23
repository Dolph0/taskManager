import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate('LoginPage');
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.footer}>
      {/* Espacio vacío a la izquierda */}
      <View style={styles.leftButton} />

      {/* Botón de Log Out centrado */}
      <View style={styles.centerButton}>
        <TouchableOpacity onPress={handleLogout}>
          <Image source={require('../assets/log.out.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Botón Atrás a la derecha */}
      <View style={styles.rightButton}>
        <TouchableOpacity onPress={handleGoBack}>
          <Image source={require('../assets/atras.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    justifyContent: 'space-between', // Distribuye los elementos con espacio entre ellos
    paddingHorizontal: 10, // Reducido para más control sobre la disposición
  },
  leftButton: {
    flex: 1, // Espacio vacío a la izquierda
  },
  centerButton: {
    flex: 2, // Ocupa más espacio en el centro para que el botón de Logout quede centrado
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightButton: {
    flex: 1, // Botón de "Atrás" a la derecha
    alignItems: 'flex-end',
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

export default Footer;


