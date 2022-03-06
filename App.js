

import React from 'react';
import Home from './src/screens/Home';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import Product from './src/screens/Product';
import { 
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic 
} from '@expo-google-fonts/roboto';
import { 
  JosefinSans_100Thin,
  JosefinSans_200ExtraLight,
  JosefinSans_300Light,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
  JosefinSans_700Bold,
  JosefinSans_100Thin_Italic,
  JosefinSans_200ExtraLight_Italic,
  JosefinSans_300Light_Italic,
  JosefinSans_400Regular_Italic,
  JosefinSans_500Medium_Italic,
  JosefinSans_600SemiBold_Italic,
  JosefinSans_700Bold_Italic 
} from '@expo-google-fonts/josefin-sans'

 import {useFonts} from 'expo-font'; 
 import AppLoading from 'expo-app-loading';


const App = () => {
  const Stack = createNativeStackNavigator();
  let [fontsLoad,error] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic ,
    JosefinSans_100Thin,
    JosefinSans_200ExtraLight,
    JosefinSans_300Light,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
    JosefinSans_100Thin_Italic,
    JosefinSans_200ExtraLight_Italic,
    JosefinSans_300Light_Italic,
    JosefinSans_400Regular_Italic,
    JosefinSans_500Medium_Italic,
    JosefinSans_600SemiBold_Italic,
    JosefinSans_700Bold_Italic 
});
if(!fontsLoad){
    return <AppLoading/>;
}

  return <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      {/* HomeScreen */}
      <Stack.Screen name="Home" component={Home}
        options={{ headerShown: false }}
      />
      {/* ProductScreen */}
      <Stack.Screen name="Product" component={Product}
        options={{
          headerTitleStyle: {
            fontSize: 20,
          },
          headerTitleAlign:"center",
        }}
      />
      {/* AboutScreen */}
      <Stack.Screen name="About" component={About}
        options={{
          headerTitleStyle: {
            fontSize: 20,
          },
          headerTitleAlign:"center",
        }}
      />
      {/* ContactScreen */}
      <Stack.Screen name="Contact" component={Contact}
        options={{
          headerTitleStyle: {
            fontSize: 20,
          },
          headerTitleAlign:"center",
        }}
      />

    </Stack.Navigator>
  </NavigationContainer>

}

export default App;