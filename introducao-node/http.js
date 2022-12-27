const fs = require('fs');
const http = require('http');
const { Interface } = require('readline');
const url = require('url');

const server = http.createServer((req, res) => {

    console.log(req.url);

    const nomeDiretorio = req.url;

    if (nomeDiretorio === '/overview' || nomeDiretorio === '/') {
        res.end("Hello do gg - overview");

    } else if (nomeDiretorio === '/products') {
        res.end("Hello do gg - products");

    } else if (nomeDiretorio === '/api') {
        res.end("Hello do gg - API");

        fs.readFile('./')


    } else {
        res.writeHead(404, {
            'content-text': 'text/html',
            'meu-proprio-cabecalho': 'text/html'
        });
        res.end("<h1>Pagina nao encontrada!!</h1>");
    }

});

server.listen(3000, '127.0.0.1', () => {
    console.log("Servidor iniciado na porta 3000");
});