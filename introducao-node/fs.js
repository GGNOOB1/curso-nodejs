const fs = require('fs');

// Com bloco, Modo sincrono
const textoEntrada = fs.readFileSync('./textos/text.txt', 'utf-8');
const textoSaida = `Isso é o que sabemos sobre narnia: ${textoEntrada}`

fs.writeFileSync('./textos/text.txt', textoSaida);

console.log(textoSaida);

// Sem bloco, Modo assincrono

fs.readFile('./textos/text.txt', 'utf-8', (err, data) => {
    if (err) throw new Error(err);
    console.log(data);
});

console.log("Lendo arquivo de texto");