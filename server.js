const express = require('express');

const server = express();

server.use(express.json());

const Lugares= ["Brasil "," Argentina"," Eua","Japão"];

//Middlewares   


server.use((req,res, next) => {
    console.time('Request');
    console.log('Metodo: ${req.method}; URL: ${req.url}; ');

    next();

    console.log('Finalizou');
    console.timeEnd('Request');
});


function checkPaises(req, res, next) {
    const passeio = lugares[req.params.index];
    if (!req.body.paises) {
        return res.status(400).json({ erro: 'País incorreto, Favor informe corretamente' });
    } 
    return next();
}

function checkIndexInArray(req, res, next) {  / FUNÇÃO DE  CHEGAR O INDEX NO ARRAY */
const local = lugares[req.params.index];
if (!local){
    return res.status(400).json({ Erro: 'lugar não existe' });
}
req.local = local;

return next();
}

server.get('/nodejs', (req, res) => {
    return res.json(req.lugares);
})
server.get('/nodejs/:index', checkIndexInArray, (req, res) => {
    return res.json(req.local);
})
console.log("subscribe us")


server.post('/nodejs', checkPaises, (req,res) => {
const {paises} = req.body;
nomes.push(paises);
return res.json(local);
})

server.put('/nodejs/:Index', checkIndexInArray, checkPaises, (req, res) => {

const { index } = req.params;

const { paises } = req.body;
nomes[index] = paises;
return res.json(local);
});
server.delete('/nodejs/:index', checkIndexInArray, (req, res) => {


nomes.splice(index,1);
return res.json(lugares);
});

server.listen(3000 , ()=> console.log("Escutando 3000"));