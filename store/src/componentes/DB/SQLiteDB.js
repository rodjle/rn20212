import SQLite from 'react-native-sqlite-storage'


//abre database , caso não exista o recria
const openDB=SQLite.openDatabase(
    {
        name:'ProjectDB',
        location:'default'
    },
    ()=>{console.log("SQLite Ok!!")},
    (error)=>{console.log(`SQLite não Ok ${error}`)}
);

//cria a tabela aluno
const criarTabela=() => {
    db.transaction((tx)=>{
        tx.executeSql(
            "CREATE TABLE IF NOT EXISTS "+
            "ALUNOS "+
            "(codigo INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, idade INTEGER)"
        )
    })
}


//cria a tabela aluno
const insereAluno= async(nome,idade) => {
    await db.transaction(async (tx)=>{
            await tx.executeSql(
                    "INSERT INTO ALUNO "+
            " (nome, idade) "+
            " values (?,?)",
            [nome,idade]
        )
    })
}




export default {
    openDB: openDB,
    createTable:createTable,
    insereAluno:insereAluno
}