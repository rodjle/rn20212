import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
const Notas = ({navigation: {goBack}}) => {


  const [alunoSelecionado, setAluno] = useState("N/A");
  const [grauSelecionado, setGrau] = useState("N/A");
  const [nota, setNota] = useState(null);
  

  return (
    //é o que vai ser redenrizado

    <View>

      <Text>Aluno</Text>
      {/* https://www.kindacode.com/article/how-to-implement-a-picker-in-react-native/ */}
      <Picker
        selectedValue={alunoSelecionado}
        onValueChange={(value, index) => setAluno(value)}
        mode="dropdown" // Android only
        >
        <Picker.Item label="Selecione o(a) Aluno(a)" value="N/A" />
        <Picker.Item label="João" value="João" />
        <Picker.Item label="Carla" value="Carla" />
        <Picker.Item label="Rafaela" value="Rafaela" />
                
      </Picker>


      <Text>Grau</Text>
      {/* https://www.kindacode.com/article/how-to-implement-a-picker-in-react-native/ */}
      <Picker
        selectedValue={grauSelecionado}
        onValueChange={(value, index) => setGrau(value)}
        mode="dropdown" // Android only
        >
        <Picker.Item label="Selecione o Grau" value="N/A" />
        <Picker.Item label="Grau 1" value="Grau 1" />
        <Picker.Item label="Grau 2" value="Grau 2" />
        <Picker.Item label="Substituição" value="Substituição" />
        <Picker.Item label="Exame" value="Exame" />        
      </Picker>

      <Text>Nota</Text>
      <TextInput
        style={{width: 100, backgroundColor: '#ccc'}}
        onChangeText={setNota}
        value={nota}
        selectTextOnFocus={true}
        keyboardType="numeric"
      />


<TouchableOpacity onPress={() => goBack()}>
        <Text>Cancelar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        // https://reactnative.dev/docs/alert
        onPress={() =>
          Alert.alert(
            'Cadastro realizado',
            `Aluno:${alunoSelecionado} Grau: ${grauSelecionado} Nota: ${nota}`,
            [
              {
                text: 'Parabéns :)',
                onPress: () => goBack(),
              },
            ],
          )
        }>
        <Text>Cadastrar</Text>
      </TouchableOpacity>

    </View>
  );
};

//definir os estilos aqui
const styles = StyleSheet.create({});




export default Notas;
