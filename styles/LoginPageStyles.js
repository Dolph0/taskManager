import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f4f4f4',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    logoContainer: {
      marginBottom: 20,
    },
    logo: {
      width: 120,
      height: 120,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 5,
      color: '#000',
    },
    subtitle: {
      fontSize: 16,
      color: '#666',
      marginBottom: 40,
    },
    input: {
      width: '100%',
      height: 50,
      backgroundColor: '#fff',
      borderRadius: 8,
      paddingHorizontal: 15,
      marginBottom: 20,
      borderColor: '#ddd',
      borderWidth: 1,
    },
    loginButton: {
      width: '100%',
      height: 50,
      backgroundColor: '#0066cc',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loginButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
  
  export default styles;