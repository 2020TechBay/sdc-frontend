import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ProductListScreen from './screens/ProductListScreen';
import ProductDetailsScreen from './screens/ProductDetails';
import Login from './screens/Loginscreen';

const Stack = createStackNavigator();


export default function App() {

  const [isLoggedIn, setLoggedIn] = useState(false)

  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
        name='Loginscreen' 
        component={Login}
        options={{title:'Login'}}
       />
         <Stack.Screen 
        name='ProductList' 
        component={ProductListScreen}
        options={{title:'Product List'}}
       />
       <Stack.Screen 
        name='ProductDetails' 
        component={ProductDetailsScreen}
        options={{title:'Product Details'}}
       />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/**
 * NOTE
 * to work on a specific part of the screen move its corresponding stack.screen to the top of the 
 * previous stack.screen
 */