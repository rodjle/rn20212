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
import {Picker} from '@react-native-picker/picker';
import AlunoDB from './DB/AlunoDB';

const Perfil = ({navigation, route}) => {
  console.log(route);

  const [alunoSelecionado, setAluno] = useState('Selecione');
  //const {numeroSelecionado}=route.params

  //ordenar por nome do aluno
  let funcaoOrdenacaoPorNome = (a, b) => {
    a = a.nome.toLowerCase();
    b = b.nome.toLowerCase();
    return a < b ? -1 : a > b ? 1 : 0;
  };

  //load from db
  let alunos = AlunoDB.sort(funcaoOrdenacaoPorNome).map((aluno, idx) => (
    <Picker.Item label={aluno.nome} value={aluno.nome} key={idx} />
  ));

  //ao selecionar no combobox, filtra o aluno da lista AlunoDB
  const alunoCadastro = AlunoDB.find(aluno => aluno.nome === alunoSelecionado);

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
        <Picker.Item label="Selecione" value="Selecione" />
        
        {/* alunos carregados de AlunosDB */}
        {alunos} 
      </Picker>


      {/* caso tenha sido preenchida a variável alunoCadastro, mostra as informações abaixo */}
      {alunoCadastro != null && (
        <>
          <Text>Aluno:{alunoCadastro.nome}</Text>
          <Text>Data Nascimento:{alunoCadastro.dataNascimento}</Text>
          <Text>Hobby:{alunoCadastro.hobby}</Text>
          <Text>Foto</Text>
          <Image
            style={{width: 80, height: 80}}
            source={{uri: alunoCadastro.foto}}
          />
        </>
      )}
    </View>
  );
};

//coloque os estilos aqui
const styles = StyleSheet.create({});


export default Perfil;
