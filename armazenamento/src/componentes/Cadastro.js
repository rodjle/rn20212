import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';
const Cadastro = ({navigation: {goBack}}) => {
  //printar route
  //console.log(route)

  //const {numeroSelecionado}=route.params

  //hooks
  const [codigo, setCodigo] = useState(null);
  const [nome, setNome] = useState(null);
  const [dataNascimento, setDataNascimento] = useState(new Date());
  const [open, setOpen] = useState(false); //abre e fecha o modal data..default fechado

  return (
    //é o que vai ser redenrizado

    <View>
      <Text>Código</Text>
      <TextInput
        style={{width: 100, backgroundColor: '#ccc'}}
        onChangeText={setCodigo}
        value={codigo}
        selectTextOnFocus={true}
        keyboardType="numeric"
      />
      <Text>Nome</Text>
      <TextInput
        style={{width: 300, backgroundColor: '#ccc'}}
        onChangeText={setNome}
        value={nome}
        selectTextOnFocus={true}
      />
      {/* https://github.com/henninghall/react-native-date-picker */}
      <Button title="Data" onPress={() => setOpen(true)} />

      <DatePicker
        modal
        open={open}
        mode={'date'}
        locale="pt-BR"
        style={{width: 250, backgroundColor: '#ccc'}}
        date={dataNascimento}
        onConfirm={date => {
          setOpen(false);
          setDataNascimento(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <Text>`Data Nascimento: {dataNascimento.toDateString()}`</Text>
      <TouchableOpacity onPress={() => goBack()}>
        <Text>Cancelar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        // https://reactnative.dev/docs/alert
        onPress={() =>
          Alert.alert(
            'Cadastro realizado',
            `Código:${codigo} Nome: ${nome} Data Nascimento: ${dataNascimento}}`,
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
const styles = StyleSheet.create({
  
});
export default Cadastro;
