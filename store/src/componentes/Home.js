import React,{useState} from "react";
import {View,Image,Text,StyleSheet,TextInput,TouchableOpacity,Alert} from 'react-native';
import { useNavigation } from "@react-navigation/native";
const Home= (props) => {
    const navigation=useNavigation();
    

    return (
        //é o que vai ser redenrizado
        

        <View>
             <Text>App - Cadastro de Alunos</Text>
             <TouchableOpacity
                onPress={()=>navigation.navigate('Cadastro')}
              
            >
            <Text >Cadastro</Text>
            </TouchableOpacity>

            
             <TouchableOpacity
                onPress={()=>navigation.navigate('Notas')}              
            >
            <Text>Notas</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=>navigation.navigate('Perfil')}              
            >
            <Text>Perfil do Aluno</Text>
            </TouchableOpacity>

        </View>

    );

    };

    const styles = StyleSheet.create({
      
      });
export default Home;