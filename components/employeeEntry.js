import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from './footer';

const EmployeeEntry = () => {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;
  
  // Colores de las tareas según el diseño
  const taskColors = {
    yellow: '#FFE250',
    purple: '#4F2659',
    orange: '#EF7A59'
  };

  return (
    <View style={styles.container}>
      {/* Logo y nombre de usuario en la parte superior */}
      <View style={styles.header}>
        <Image 
          source={require('../assets/Logo.png')} 
          style={styles.logo} 
        />
        <Text style={styles.userName}>User Name</Text>
      </View>

      {/* Lista de tareas */}
      <ScrollView 
        style={styles.tasksContainer} 
        contentContainerStyle={styles.tasksContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Tareas amarillas */}
        <View style={styles.taskGroup}>
          <TouchableOpacity style={[styles.taskButton, { backgroundColor: taskColors.yellow, width: screenWidth - 40 }]}>
            <Text style={styles.taskText}>Task tittle</Text>
          </TouchableOpacity>
          
          <View style={styles.separator} />
          
          <TouchableOpacity style={[styles.taskButton, { backgroundColor: taskColors.yellow, width: screenWidth - 40 }]}>
            <Text style={styles.taskText}>Task tittle</Text>
          </TouchableOpacity>
        </View>
        
        {/* Tareas púrpuras */}
        <TouchableOpacity style={[styles.taskButton, { backgroundColor: taskColors.purple, width: screenWidth - 40 }]}>
          <Text style={[styles.taskText, { color: '#FFFFFF' }]}>Task tittle</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.taskButton, { backgroundColor: taskColors.purple, width: screenWidth - 40 }]}>
          <Text style={[styles.taskText, { color: '#FFFFFF' }]}>Task tittle</Text>
        </TouchableOpacity>
        
        {/* Tareas naranjas */}
        <TouchableOpacity style={[styles.taskButton, { backgroundColor: taskColors.orange, width: screenWidth - 40 }]}>
          <Text style={styles.taskText}>Task tittle</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.taskButton, { backgroundColor: taskColors.orange, width: screenWidth - 40 }]}>
          <Text style={styles.taskText}>Task tittle</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Footer con icono de logout */}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
    alignSelf: 'flex-start',
  },
  logo: {
    width: 74,
    height: 81.5,
    resizeMode: 'contain',
  },
  userName: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 25,
    color: '#105983',
    marginLeft: 15,
  },
  tasksContainer: {
    flex: 1,
    width: '100%',
  },
  tasksContent: {
    alignItems: 'center',
    paddingBottom: 100, // Espacio para que no se oculten tareas detrás del footer
  },
  taskGroup: {
    width: '100%',
    alignItems: 'center',
  },
  taskButton: {
    height: 50,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginVertical: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskText: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 20,
    textAlign: 'center',
    color: '#000000',
  },
  separator: {
    height: 1,
    backgroundColor: '#BBBBBB',
    width: '100%',
    marginVertical: 1,
  },
});

export default EmployeeEntry;
