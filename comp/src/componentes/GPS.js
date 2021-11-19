// Créditos para https://myselfdev.medium.com/como-usar-a-geolocaliza%C3%A7%C3%A3o-no-react-native-979bc922cd77

import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, PermissionsAndroid,Platform } from 'react-native';

import Geolocation from 'react-native-geolocation-service';
import { TextInput } from 'react-native-gesture-handler';




const GPS=()=> {
  
  

  const [location, setLocation] = useState([]);

  async function requestPermissions() {
    // if (Platform.OS === 'ios') {
    //   Geolocation.requestAuthorization();
    //   Geolocation.setRNConfiguration({
    //     skipPermissionRequests: false,
    //    authorizationLevel: 'whenInUse',
    //  });
    // }
  
    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }
  }

  useEffect(() => {
    requestPermissions();
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLocation({
          latitude,
          longitude,
        });
        console.log(position)
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);

  return (
    <View>
      {location ? (
        <>
          <TextInput>Latitude: {location.latitude}</TextInput>
          <TextInput>Latitude: {location.longitude}</TextInput>
        </>
      ) : (
        <TextInput>..Loading</TextInput>
      )}
    </View>
  );
};


  export default GPS;