import SQLite from 'react-native-sqlite-storage';

//abre database , caso não exista o recria
const db = SQLite.openDatabase(
  {
    name: 'ProjectDB',
    location: 'default',
  },
  () => {
    console.log('SQLite Ok!!');
  },
  error => {
    console.log(`SQLite não Ok ${error}`);
  },
);

//cria a tabela aluno
const criaTabela = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS ' +
        'CADALUNO ' +
        '(id INTEGER PRIMARY KEY AUTOINCREMENT,codigo INTEGER, nome TEXT,dataNascimento TEXT)',
    );
  });
};




export default {
  db: db,
  criaTabela: criaTabela
};
