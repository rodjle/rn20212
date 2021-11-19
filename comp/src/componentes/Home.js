import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const Home = props => {
  const navigation = useNavigation();

  return (
    
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
          <Text style={styles.button}> Camera </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('GPS')}>
          <Text style={styles.button}> Geolocalização </Text>
        </TouchableOpacity>
      </View>

     
       
     
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginBottom: 4,
    fontSize: 14,
    padding: 10,
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: 10,
    width: 200,
    textAlign:'center'
  },
});
export default Home;
