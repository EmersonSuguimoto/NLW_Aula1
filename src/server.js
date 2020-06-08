const express = require("express")
const server = express()

// pegar o banco de dados

const db = require("./database/db")

// Configurar pasta pública, disponibiliza arquivos do public para o src
server.use(express.static("public"))

// habilitar o use do req.body da nossa aplicação
server.use(express.urlencoded({ extended: true }))

// utilizando tempalte engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// Configurar caminhos da aplicação
server.get("/", (req, res) => {
    return res.render("index.html")
})


server.get("/create-point", (req, res) => {
    
    //req.query: Query string da nossa url
    console.log(req.query);

    return res.render("create-point.html")
})

server.post("/savepoint", (req,res) => {
    // req.body: Corpo do formulário
    // console.log(req.body);

    // inserir dados no banco de dados
    const query = `
            INSERT INTO places(
                image,
                name,
                address,
                address2,
                state,
                city,
                items
            ) VALUES (?, ?, ?, ?, ?, ?, ?);
    `
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err){
        if(err){
            console.log(err);
            return res.send("Erro no Cadastro!")
        }

        console.log("Cadastrado com sucesso!")
        console.log(this)

        return res.render("create-pointe.html", {save : true})
    }

    db.run(query, values, afterInsertData)

   
})


server.get("/search", (req, res) => {

    const search = req.query.search

    // if(search == ""){
    //     // Pesquisa vazia
    //     return res.render("search-results.html", { total: 0} )
    // }

    db.all(` SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) {
        if(err){
            return console.log(err);
        }

        console.log("Aqui estão seus registros")
        console.log(rows)

        const total = rows.length

        return res.render("search-results.html", { places: rows, total: total} )

    })    
})

server.listen(3000)
