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
import SQLiteDB from "./DB/SQLiteDB";
import {useNavigation} from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';
import { FlatList } from 'react-native-gesture-handler';
const Cadastro = ({navigation: {goBack}}) => {

  SQLiteDB.criaTabela()
  //printar route
  //console.log(route)

  //const {numeroSelecionado}=route.params

  //hooks
  const [codigo, setCodigo] = useState(null);
  const [nome, setNome] = useState(null);
  const [dataNascimento, setDataNascimento] = useState(new Date());
  const [open, setOpen] = useState(false); //abre e fecha o modal data..default fechado
  const [alunos, setAlunos] = useState([]);



 //insere
const insereAluno = (codigo, nome, dataNascimento) => {
  console.log(codigo, nome, dataNascimento);
  SQLiteDB.db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO CADALUNO (codigo,nome, dataNascimento) values (?,?,?)',
      [codigo, nome, dataNascimento.toDateString()],
      (tx, results) => {
        console.log('Results', results.rowsAffected);
        if (results.rowsAffected > 0) {
          Alert.alert('Data Inserted Successfully....');
        } else Alert.alert('Failed....');
      },
    );
  });
};

//busca alunos
const buscaAlunos = () => {
  SQLiteDB.db.transaction(tx => {
    tx.executeSql(
      'SELECT codigo,nome,dataNascimento from CADALUNO order by nome',
      [],
      (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i)
          temp.push(results.rows.item(i));
        console.log(temp);
        setAlunos(temp)
      },
    );
  });
};





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
        onPress={() => {
         insereAluno(codigo,nome,dataNascimento)
         buscaAlunos();
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
        }
        }>
        <Text>Cadastrar</Text>
      </TouchableOpacity>
     
    </View>
  );
};



const styles = StyleSheet.create({
  
});




export default Cadastro;
