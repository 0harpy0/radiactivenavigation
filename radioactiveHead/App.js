import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home.js';
import Producto from './components/Producto.js';
import Contactos from './components/Contactos.js';
import ID from './components/ID.js';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'> 


 <Stack.Screen name="Home" component={Home} />
 <Stack.Screen name="Producto" component={Producto} />



      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#120314ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
