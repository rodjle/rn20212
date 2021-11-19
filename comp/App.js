/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./src/componentes/Home";
import Camera from './src/componentes/Camera';
import GPS from './src/componentes/GPS';




const Stack=createStackNavigator();

const App: () => Node = () => {
 
  return (
     <>
      <StatusBar barStyle='light-content'  />

      <NavigationContainer>
          <Stack.Navigator screenOptions={{
                           headerMode:'screen'}}
                           initialRouteName='Home'>
            
            <Stack.Screen name='Home'          
                        options={{headerShown:false}}>
                        {(props) => <Home {...props} username='Sports Fan' cab='xx'/>}
            </Stack.Screen>

            <Stack.Screen
               name="Camera"
               component={Camera}
               options={{             
                 headerTitleAlign:'center',               
                 headerTitle: 'Camera'
               }}
               >
            </Stack.Screen>

            <Stack.Screen
               name="GPS"
               component={GPS}
               options={{             
                 headerTitleAlign:'center',               
                 headerTitle: 'Gelocalização'
               }}
               >
            </Stack.Screen>
           
          </Stack.Navigator>      
      </NavigationContainer>   


   
    </>
  );
};



export default App;
