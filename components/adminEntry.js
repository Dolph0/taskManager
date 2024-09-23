import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Header from '../components/header'; // Ajusta la ruta si es necesario
import Footer from '../components/footer'; // Asegúrate de que la ruta sea correcta
import { useNavigation } from '@react-navigation/native'; // Hook de navegación

const AdminEntry = () => {
  const navigation = useNavigation(); // Usa el hook de navegación
  const screenWidth = Dimensions.get('window').width; // Obtener el ancho de la pantalla

  return (
    <View style={styles.container}>
      {/* Renderiza el componente Header */}
      <Header />

      {/* Botón Añadir tarea */}
      <TouchableOpacity 
        style={[styles.button, { width: screenWidth - 70 }]} // El ancho del botón ocupa todo menos los márgenes
        onPress={() => navigation.navigate('AddTask')} // Prepara la navegación para la pantalla 'AddTask'
      >
        <Text style={styles.buttonText}>Añadir tarea</Text>
      </TouchableOpacity>

      {/* Botón Editar tarea */}
      <TouchableOpacity 
        style={[styles.button, { width: screenWidth - 70 }]} // El ancho del botón ocupa todo menos los márgenes
        onPress={() => navigation.navigate('EditTask')} // Prepara la navegación para la pantalla 'EditTask'
      >
        <Text style={styles.buttonText}>Editar tarea</Text>
      </TouchableOpacity>

      {/* Botón Editar empleados */}
      <TouchableOpacity 
        style={[styles.button, { width: screenWidth - 70 }]} // El ancho del botón ocupa todo menos los márgenes
        onPress={() => navigation.navigate('EditEmployees')} // Prepara la navegación para la pantalla 'EditEmployees'
      >
        <Text style={styles.buttonText}>Editar empleados</Text>
      </TouchableOpacity>

      {/* Botón No finalizadas */}
      <TouchableOpacity 
        style={[styles.button, { width: screenWidth - 70 }]} // El ancho del botón ocupa todo menos los márgenes
        onPress={() => navigation.navigate('IncompleteTasks')} // Prepara la navegación para la pantalla 'IncompleteTasks'
      >
        <Text style={styles.buttonText}>No finalizadas</Text>
      </TouchableOpacity>

      {/* Renderiza el componente Footer */}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // Alinea el contenido al centro
    paddingTop: 30,
    marginHorizontal: 35, // Añade margen superior para que el contenido no toque el Header
  },
  welcomeText: {
    fontSize: 20,
    marginVertical: 20,
    color: '#000',
  },
  button: {
    paddingVertical: 15, // Altura del botón
    marginVertical: 10, // Espacio entre los botones
    backgroundColor: '#105983',
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 25,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default AdminEntry;


