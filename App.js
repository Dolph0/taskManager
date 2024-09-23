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
//           <Stack.Screen 
//             name="LoginPage" 
//             component={LoginPage} 
//             options={{ headerShown: false }}  // Oculta la cabecera
//           />
//           <Stack.Screen 
//             name="AdminEntry" 
//             component={AdminEntry} 
//             options={{ headerShown: false }}  // Oculta la cabecera también aquí
//           />
//         </Stack.Navigator>
//       </SafeAreaView>
//     </NavigationContainer>
//   );
// }



import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native';
import LoginPage from './components/LoginPage';
import AdminEntry from './components/adminEntry'; // Asegúrate de que la ruta sea correcta
import ManagerEntry from './components/managerEntry'; // Importa el nuevo componente ManagerEntry

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
          <Stack.Screen 
            name="ManagerEntry" 
            component={ManagerEntry} 
            options={{ headerShown: false }}  // Oculta la cabecera también aquí
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}






