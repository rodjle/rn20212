'use strict';
import React, { PureComponent } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import RNFS from 'react-native-fs';


const Camera = ({ initialProps }) => {
    const [{ cameraRef },{takePicture}]= useCamera(null);

    const handlePicture=async ()=>{
        try {
            const data=await takePicture();
            const filePathCurrent=data.uri;
            const filePathNew=RNFS.ExternalCachesDirectoryPath+'/pic.jpg';
            RNFS.moveFile(filePathCurrent,filePathNew)
               .then(()=>{
                   console.log("Imagem movida: "+filePathNew)
               })
               .catch(error=>{
                   console.log("Imagem não movida: "+error)
               })
            console.log(data.uri);
        }catch(error){
            console.log(error)
        }
    }
  
    return (
      <View style={{ flex: 1 }}>
        <RNCamera
          ref={cameraRef}
          type={RNCamera.Constants.Type.back}
          
          style={styles.preview}
        
        >
           <TouchableOpacity onPress={()=>handlePicture()}>
            <Text style={styles.button}> Ok </Text>
          </TouchableOpacity> 

        </RNCamera>
  
        
  
        
       
      </View>
    );
  };

  const styles = StyleSheet.create({
    preview: {
      flex: 1,
      justifyContent:'flex-end',
      alignItems:'center'
    },
    button:{
        marginBottom:4,
        fontSize:28,
        padding: 10,
        backgroundColor:'blue',
        color: 'white',
        borderRadius:10
    }
    
  });
export default  Camera;
