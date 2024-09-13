//configuracion pre react navigation




// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
// import LoginPage from './components/LoginPage';

// export default function App() {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <LoginPage />
//     </SafeAreaView>
//   );
// }





//configuracion con react navigation base(osease con los titulos de las paginas arriba y las flechitas de navegacion)


// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { SafeAreaView } from 'react-native';
// import LoginPage from './components/LoginPage';
// import AdminEntry from './components/adminEntry'; // Importa AdminEntry

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <SafeAreaView style={{ flex: 1 }}>
//         <Stack.Navigator initialRouteName="LoginPage">
//           <Stack.Screen name="LoginPage" component={LoginPage} />
//           <Stack.Screen name="AdminEntry" component={AdminEntry} />
//         </Stack.Navigator>
//       </SafeAreaView>
//     </NavigationContainer>
//   );
// }


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native';
import LoginPage from './components/LoginPage';
import AdminEntry from './components/adminEntry'; // Importa AdminEntry

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Navigator initialRouteName="LoginPage">
          <Stack.Screen 
            name="LoginPage" 
            component={LoginPage} 
            options={{ headerShown: false }}  // Oculta la cabecera
          />
          <Stack.Screen 
            name="AdminEntry" 
            component={AdminEntry} 
            options={{ headerShown: false }}  // Oculta la cabecera también aquí
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}






