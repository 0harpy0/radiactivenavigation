import react from "react";
import { View, Text, Button, StyleSheet } from "react-native";


export default function Home({ navigation }) {
  return ( 
    <view>

    <text>Home screen</text>

    <Button
    title="Ir para produto"
    onPress={() => navigation.navigate ('Producto')}/>
     <Button
    title="Ir para ID's"
    onPress={() => navigation.navigate ('ID')}/>
     <Button
    title="Ir para Contactos"
    onPress={() => navigation.navigate ('Contactos')}/>
     
 

    </view>

  );
}


function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}






