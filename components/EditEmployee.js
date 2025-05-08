import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import Header from '../components/header';
import Footer from '../components/footer';
import { useNavigation } from '@react-navigation/native';
import { Image as RNImage } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

let lupaIcon;
try {
  lupaIcon = require('../assets/lupa.png');
} catch (e) {
  // Si la imagen no existe, usa un placeholder o deja vacío
  lupaIcon = null;
}

const EditEmployee = () => {
  const navigation = useNavigation(); // Hook de navegación
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userType, setUserType] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [employees, setEmployees] = useState([]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelectUserType = (type) => {
    setUserType(type);
  };

  const handleAddEmployee = async () => {
    if (!name || !password || !userType) {
      alert('Por favor, completa todos los campos.');
      return;
    }
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await fetch('http://localhost:8082/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify({
          name: name,
          password: password,
          role: userType.toLowerCase(),
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Error al crear el empleado');
      }
      alert('Empleado añadido con éxito');
      setIsDropdownOpen(false);
      setUserType('');
      setName('');
      setPassword('');
    } catch (err) {
      alert('Error al añadir empleado: ' + err.message);
    }
  };

  const handleBackNavigation = () => {
    navigation.goBack(); // Navegar hacia atrás
  };

  // Obtener empleados al abrir el desplegable
  useEffect(() => {
    if (isDropdownOpen) {
      fetchEmployees();
    }
  }, [isDropdownOpen]);

  const fetchEmployees = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await fetch('http://localhost:8082/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Error al obtener empleados');
      }
      setEmployees(data);
    } catch (err) {
      alert('Error al obtener empleados: ' + err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Header />

      {/* Buscador de empleados */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar empleado"
        />
        <Image source={lupaIcon} style={styles.searchIcon} />
      </View>

      {/* Pestaña "Nuevo empleado" */}
      <TouchableOpacity style={styles.newEmployeeTab} onPress={toggleDropdown}>
        <Text style={styles.newEmployeeText}>Nuevo empleado</Text>
      </TouchableOpacity>

      {/* Desplegable */}
      {isDropdownOpen && (
        <ScrollView style={styles.dropdown} contentContainerStyle={styles.dropdownContent}>
          {/* Texto de selección de tipo de usuario */}
          <Text style={styles.labelText}>Selecciona el tipo de usuario:</Text>
          {/* Opciones de tipo de usuario */}
          <TouchableOpacity 
            style={[
              styles.dropdownOption, 
              userType === 'Administrador' && styles.selectedOption
            ]} 
            onPress={() => handleSelectUserType('Administrador')}
          >
            <Text style={[styles.optionText, userType === 'Administrador' && styles.selectedOptionText]}>
              Administrador
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[
              styles.dropdownOption, 
              userType === 'Manager' && styles.selectedOption
            ]} 
            onPress={() => handleSelectUserType('Manager')}
          >
            <Text style={[styles.optionText, userType === 'Manager' && styles.selectedOptionText]}>
              Manager
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[
              styles.dropdownOption, 
              userType === 'Empleado' && styles.selectedOption
            ]} 
            onPress={() => handleSelectUserType('Empleado')}
          >
            <Text style={[styles.optionText, userType === 'Empleado' && styles.selectedOptionText]}>
              Empleado
            </Text>
          </TouchableOpacity>

          {/* Campo de nombre y apellido */}
          <TextInput
            style={styles.inputField}
            placeholder="Nombre y primer apellido"
            value={name}
            onChangeText={setName}
          />

          {/* Campo de contraseña */}
          <TextInput
            style={styles.inputField}
            placeholder="Contraseña"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          {/* Botón Añadir */}
          <TouchableOpacity 
            style={styles.editButton}
            onPress={handleAddEmployee}
          >
            <Text style={styles.editButtonText}>Añadir</Text>
          </TouchableOpacity>

          {/* Listado de empleados */}
          <Text style={styles.labelText}>Empleados actuales:</Text>
          {employees.length === 0 ? (
            <Text style={{ color: '#888', marginVertical: 10 }}>No hay empleados registrados.</Text>
          ) : (
            employees.map((emp, idx) => (
              <View key={emp._id || idx} style={{ padding: 8, borderBottomWidth: 1, borderColor: '#eee' }}>
                <Text style={{ color: '#105983', fontWeight: 'bold' }}>{emp.username || emp.name}</Text>
                <Text style={{ color: '#333' }}>Rol: {emp.role}</Text>
              </View>
            ))
          )}
        </ScrollView>
      )}

      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
    marginHorizontal: 35,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  searchInput: {
    flex: 1,
    height: 50, // Altura de la pestaña de búsqueda
    paddingLeft: 15,
    paddingRight: 50,
    borderWidth: 2,
    borderColor: '#105983',
    borderRadius: 15,
    backgroundColor: '#FFF',
    fontSize: 16,
  },
  searchIcon: {
    width: 18,
    height: 20,
    position: 'absolute',
    right: 15,
  },
  newEmployeeTab: {
    width: '100%',
    height: 50, // Ajuste de altura para que coincida con la de la pestaña de búsqueda
    backgroundColor: '#FFF', // Fondo blanco
    borderRadius: 15, // Misma curvatura que la pestaña de búsqueda
    borderWidth: 2, // Grosor del borde igual al de la pestaña de búsqueda
    borderColor: '#105983', // Borde azul
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center', // Centra el texto verticalmente
  },
  newEmployeeText: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 18,
    color: '#105983', // Color de texto azul
  },
  dropdown: {
    width: '100%',
    marginTop: 10,
  },
  dropdownContent: {
    paddingBottom: 20,
  },
  labelText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#105983',
  },
  dropdownOption: {
    paddingVertical: 10,
    marginVertical: 5,
  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },
  selectedOption: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingVertical: 12,
    borderColor: '#105983',
    borderWidth: 2,
  },
  selectedOptionText: {
    color: '#105983',
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  inputField: {
    height: 50,
    marginVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 2,
    borderColor: '#105983',
    borderRadius: 15,
    backgroundColor: '#FFF',
    fontSize: 16,
  },
  editButton: {
    backgroundColor: '#105983',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  editButtonText: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 18,
    color: '#FFFFFF',
  },
});

export default EditEmployee;



