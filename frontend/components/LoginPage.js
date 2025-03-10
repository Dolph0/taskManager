


// import React from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';
// import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins';  
// import styles from '../styles/LoginPageStyles.js';

// const LoginPage = () => {
//     // Cargar las fuentes
//     let [fontsLoaded] = useFonts({
//         Poppins_700Bold,  
//     });

//     if (!fontsLoaded) {
//         return <ActivityIndicator size="large" color="#0000ff" />;
//     }

//     return (
//       <View style={styles.container}>
//         {/* Logo Section */}
//         <View style={styles.logoContainer}>
//           <Image source={require('../assets/Logo.png')} style={{ width: 182, height: 200 }} />
//         </View>

//         {/* Title Section */}
//         <Text style={[styles.subtitle, { fontFamily: 'Poppins_700Bold', fontSize: 25, color: '#105983', marginBottom:30 }]}>
//           Task manager
//         </Text>

//         {/* Input Fields */}
//         <TextInput
//           placeholder="Username"
//           style={[styles.input, { borderColor: '#105983', borderWidth: 2, borderRadius: 10 }]}
//           placeholderTextColor="#888"
//         />
//         <TextInput
//           placeholder="Password"
//           secureTextEntry={true}
//           style={[styles.input, { borderColor: '#105983', borderWidth: 2, borderRadius: 10 }]}
//           placeholderTextColor="#888"
//         />

//         {/* Login Button */}
        
//         <TouchableOpacity style={[styles.loginButton, { backgroundColor: '#105983', borderRadius: 10}]}>
//   <Text style={[styles.loginButtonText, { fontFamily: 'Poppins_700Bold', fontSize: 25, color: '#FFFFFF', textAlign: 'center' }]}>
//     Log in
//   </Text>
// </TouchableOpacity>



//       </View>
//     );
// };

// export default LoginPage;













import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins';  
import { useNavigation } from '@react-navigation/native'; // Importa el hook
import styles from '../styles/LoginPageStyles.js';

const LoginPage = () => {
    // Cargar las fuentes
    let [fontsLoaded] = useFonts({
        Poppins_700Bold,  
    });

    const navigation = useNavigation(); // Usa el hook de navegación

    if (!fontsLoaded) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    const handleLogin = () => {
        navigation.navigate('AdminEntry'); // Navega a la pantalla AdminEntry
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
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={[styles.input, { borderColor: '#105983', borderWidth: 2, borderRadius: 10 }]}
          placeholderTextColor="#888"
        />

        {/* Login Button */}
        <TouchableOpacity 
          style={[styles.loginButton, { backgroundColor: '#105983', borderRadius: 10 }]}
          onPress={handleLogin} // Llama a handleLogin en el onPress
        >
          <Text style={[styles.loginButtonText, { fontFamily: 'Poppins_700Bold', fontSize: 25, color: '#FFFFFF', textAlign: 'center' }]}>
            Log in
          </Text>
        </TouchableOpacity>
      </View>
    );
};

export default LoginPage;


