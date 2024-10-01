// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
// import Header from '../components/header'; // Ajusta la ruta si es necesario
// import Footer from '../components/footer'; // Asegúrate de que la ruta sea correcta
// import { useNavigation } from '@react-navigation/native'; // Hook de navegación

// const EditEmployee = () => {
//   const navigation = useNavigation(); // Usa el hook de navegación
//   const screenWidth = Dimensions.get('window').width; // Obtener el ancho de la pantalla

//   return (
//     <View style={styles.container}>
//       {/* Renderiza el componente Header */}
//       <Header />


        

      

//       {/* Renderiza el componente Footer */}
//       <Footer />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center', // Alinea el contenido al centro
//     paddingTop: 30,
//     marginHorizontal: 35, // Añade margen superior para que el contenido no toque el Header
//   },
//   welcomeText: {
//     fontSize: 20,
//     marginVertical: 20,
//     color: '#000',
//   },
//   button: {
//     paddingVertical: 15, // Altura del botón
//     marginVertical: 10, // Espacio entre los botones
//     backgroundColor: '#105983',
//     borderRadius: 10,
//   },
//   buttonText: {
//     fontFamily: 'Poppins_700Bold',
//     fontSize: 25,
//     color: '#FFFFFF',
//     textAlign: 'center',
//   },
// });

// export default EditEmployee;










// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
// import Header from '../components/header';
// import Footer from '../components/footer';
// import { useNavigation } from '@react-navigation/native';
// import lupaIcon from '../assets/lupa.png';

// const EditEmployee = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [userType, setUserType] = useState('');
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleSelectUserType = (type) => {
//     setUserType(type);
//   };

//   return (
//     <View style={styles.container}>
//       <Header />

//       {/* Buscador de empleados */}
//       <View style={styles.searchContainer}>
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Buscar empleado"
//         />
//         <Image source={lupaIcon} style={styles.searchIcon} />
//       </View>

//       {/* Pestaña "Nuevo empleado" */}
//       <TouchableOpacity style={styles.newEmployeeTab} onPress={toggleDropdown}>
//         <Text style={styles.newEmployeeText}>Nuevo empleado</Text>
//       </TouchableOpacity>

//       {/* Desplegable */}
//       {isDropdownOpen && (
//         <ScrollView style={styles.dropdown} contentContainerStyle={styles.dropdownContent}>
          
//           {/* Texto de selección de tipo de usuario */}
//           <Text style={styles.labelText}>Selecciona el tipo de usuario:</Text>

//           {/* Opciones de tipo de usuario */}
//           <TouchableOpacity 
//             style={[
//               styles.dropdownOption, 
//               userType === 'Administrador' && styles.selectedOption
//             ]} 
//             onPress={() => handleSelectUserType('Administrador')}
//           >
//             <Text style={[styles.optionText, userType === 'Administrador' && styles.selectedOptionText]}>
//               Administrador
//             </Text>
//           </TouchableOpacity>

//           <TouchableOpacity 
//             style={[
//               styles.dropdownOption, 
//               userType === 'Manager' && styles.selectedOption
//             ]} 
//             onPress={() => handleSelectUserType('Manager')}
//           >
//             <Text style={[styles.optionText, userType === 'Manager' && styles.selectedOptionText]}>
//               Manager
//             </Text>
//           </TouchableOpacity>

//           <TouchableOpacity 
//             style={[
//               styles.dropdownOption, 
//               userType === 'Empleado' && styles.selectedOption
//             ]} 
//             onPress={() => handleSelectUserType('Empleado')}
//           >
//             <Text style={[styles.optionText, userType === 'Empleado' && styles.selectedOptionText]}>
//               Empleado
//             </Text>
//           </TouchableOpacity>

//           {/* Campo de nombre y apellido */}
//           <TextInput
//             style={styles.inputField}
//             placeholder="Nombre y primer apellido"
//             value={name}
//             onChangeText={setName}
//           />

//           {/* Campo de contraseña */}
//           <TextInput
//             style={styles.inputField}
//             placeholder="Contraseña"
//             secureTextEntry
//             value={password}
//             onChangeText={setPassword}
//           />

//           {/* Botón Añadir */}
//           <TouchableOpacity style={styles.editButton}>
//             <Text style={styles.editButtonText}>Añadir</Text>
//           </TouchableOpacity>
//         </ScrollView>
//       )}

//       <Footer />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     paddingTop: 30,
//     marginHorizontal: 35,
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: '100%',
//     marginVertical: 20,
//   },
//   searchInput: {
//     flex: 1,
//     height: 50,
//     paddingLeft: 15,
//     paddingRight: 50,
//     borderWidth: 2,
//     borderColor: '#105983',
//     borderRadius: 15,
//     backgroundColor: '#FFF',
//     fontSize: 16,
//   },
//   searchIcon: {
//     width: 18, // Ajuste de ancho
//     height: 20, // Ajuste de altura
//     position: 'absolute',
//     right: 15,
//   },
//   newEmployeeTab: {
//     width: '100%',
//     paddingVertical: 15,
//     backgroundColor: '#FFF', // Fondo blanco
//     borderRadius: 15, // Misma curvatura que la pestaña de búsqueda
//     borderWidth: 2, // Grosor del borde igual al de la pestaña de búsqueda
//     borderColor: '#105983', // Borde azul
//     marginVertical: 10,
//     alignItems: 'center',
//   },
//   newEmployeeText: {
//     fontFamily: 'Poppins_700Bold',
//     fontSize: 18,
//     color: '#105983', // Color de texto azul
//   },
//   dropdown: {
//     width: '100%',
//     marginTop: 10,
//   },
//   dropdownContent: {
//     paddingBottom: 20,
//   },
//   labelText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginVertical: 10,
//   },
//   dropdownOption: {
//     paddingVertical: 10,
//     marginVertical: 5,
//   },
//   optionText: {
//     fontSize: 16,
//     color: '#000',
//   },
//   selectedOption: {
//     backgroundColor: '#105983',
//     borderRadius: 10,
//     paddingVertical: 12,
//   },
//   selectedOptionText: {
//     color: '#FFFFFF',
//     fontWeight: 'bold',
//   },
//   inputField: {
//     height: 50,
//     marginVertical: 10,
//     paddingHorizontal: 15,
//     borderWidth: 2,
//     borderColor: '#105983',
//     borderRadius: 15,
//     backgroundColor: '#FFF',
//     fontSize: 16,
//   },
//   editButton: {
//     backgroundColor: '#105983',
//     paddingVertical: 15,
//     borderRadius: 10,
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   editButtonText: {
//     fontFamily: 'Poppins_700Bold',
//     fontSize: 18,
//     color: '#FFFFFF',
//   },
// });

// export default EditEmployee;







import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import Header from '../components/header';
import Footer from '../components/footer';
import { useNavigation } from '@react-navigation/native';
import lupaIcon from '../assets/lupa.png';

const EditEmployee = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userType, setUserType] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelectUserType = (type) => {
    setUserType(type);
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
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Añadir</Text>
          </TouchableOpacity>
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



