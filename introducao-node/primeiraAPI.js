var fs = require('fs');
var http = require('http');
var url = require('url');
var dados = fs.readFileSync("./data/data.json", 'utf-8');
var dadosObjeto = JSON.parse(dados);
var server = http.createServer(function (req, res) {
    var nomeDiretorio = req.url;
    if (nomeDiretorio === '/overview' || nomeDiretorio === '/') {
        res.end("Hello do gg - overview");
    }
    else if (nomeDiretorio === '/products') {
        res.end("Hello do gg - products");
    }
    else if (nomeDiretorio === '/api') {
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(dados);
    }
    else {
        res.writeHead(404, {
            'content-text': 'text/html',
            'meu-proprio-cabecalho': 'text/html'
        });
        res.end("<h1>Pagina nao encontrada!!</h1>");
    }
});
server.listen(3000, '127.0.0.1', function () {
    console.log("Servidor iniciado na porta 3000");
});
