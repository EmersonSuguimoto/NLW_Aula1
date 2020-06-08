// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// criar o objeto que irá faze operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
// utilizar o objeto de banco de dados, para nossas operações
// db.serialize( () => {    
//     // Criar uma tabela
//     // db.run(`
//     //     CREATE TABLE IF NOT EXISTS places (
//     //         id INTEGER PRIMARY KEY AUTOINCREMENT,
//     //         image TEXT,
//     //         name TEXT,
//     //         address TEXT,
//     //         address2 TEXT,
//     //         state TEXT,
//     //         city TEXT,
//     //         items TEXT
//     //     );
//     // `)
//     // const query = `
//     //         INSERT INTO places(
//     //             image,
//     //             name,
//     //             address,
//     //             address2,
//     //             state,
//     //             city,
//     //             items
//     //         ) VALUES (?, ?, ?, ?, ?, ?, ?);
//     // `
//     // const values = [
//     //     "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80",
//     //     "Colectoria",
//     //     "Guilherme Gemballa, Jardim América",
//     //     "Número 260",
//     //     "Santa Catarina",
//     //     "Rio do Sul",
//     //     "Residuos Eletrônicos, Lâmpadas"
//     // ]

//     // const values2 = [
//     //     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//     //     "Papersider",
//     //     "Guilherme Gemballa, Jardim América",
//     //     "Número 260",
//     //     "Santa Catarina",
//     //     "Rio do Sul",
//     //     "Papéis e Papelão"
//     // ]

//     // function afterInsertData(err){
//     //     if(err){
//     //         return console.log(err);
//     //     }

//     //     console.log("Cadastrado com sucesso!")
//     //     console.log(this)
//     // }

//     // afterInsertData é passada como referencia e executada somente depois da inserção
//     // db.run(query, values, afterInsertData)
//     // db.run(query, values2, afterInsertData)

//     // // Consultar dados da Tabela
//     // db.all(` SELECT * FROM places`, function(err, rows) {
//     //     if(err){
//     //         return console.log(err);
//     //     }

//     //     console.log("Aqui estão seus registros")
//     //     console.log(rows)
//     // })

//     // // Deletar um dados
//     // db.run(`DELETE FROM places WHERE id = ?`, [1], function(err) {
//     //     if(err){
//     //         return console.log(err);
//     //     }

//     //     console.log("Registro deletado com sucesso")

//     // })


// })
