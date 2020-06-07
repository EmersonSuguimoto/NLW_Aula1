const express = require("express")
const server = express()

// Configurar pasta pública, disponibiliza arquivos do public para o src
server.use(express.static("public"))

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
    return res.render("create-point.html")
})
server.get("/search", (req, res) => {
    return res.render("search-results.html")
})

server.listen(3000)
