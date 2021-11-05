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
import Cadastro from './src/componentes/Cadastro';
import Notas from './src/componentes/Notas';
import Perfil from './src/componentes/Perfil';


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
               name="Cadastro"
               component={Cadastro}
               options={{             
                 headerTitleAlign:'center',               
                 headerTitle: 'Cadastro'
               }}
               >
            </Stack.Screen>

            <Stack.Screen
               name="Notas"
               component={Notas}
               options={{             
                 headerTitleAlign:'center',               
                 headerTitle: 'Notas'
               }}
               >
            </Stack.Screen>
            <Stack.Screen
               name="Perfil"
               component={Perfil}
               options={{             
                 headerTitleAlign:'center',               
                 headerTitle: 'Perfil'
               }}
               >
            </Stack.Screen>


          </Stack.Navigator>      
      </NavigationContainer>   


   
    </>
  );
};



export default App;
