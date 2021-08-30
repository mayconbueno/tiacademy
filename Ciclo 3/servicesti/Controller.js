const express=require('express');
const cors=require('cors');

const models=require('./models');

const app=express();
app.use(cors());
app.use(express.json());


let cliente=models.Cliente;
let servico=models.Servico;
let pedido=models.Pedido;

app.get('/', function(req,res){
    res.send('Olá Mundo!');
});


app.get('/clientes', async(req,res)=>{
   let create=await cliente.create({
       nome:"Maycon Bueno de Oliveira",
       endereco:"rua uberlandia, 490",
       cidade: "Londrina",
       uf: "PR",
       nascimento: "1986-10-26",
   });
    res.send('Cliente novo inserido!');
});


app.post('/servicos', async(req,res)=>{
    let create=await servico.create(
        req.body
    );
    res.send("serviço foi inserido");
});

app.get('/pedidos', async(req,res)=>{
    let create=await pedido.create({
       idcliente:"2",
       idservico:"2",
       valor:"100",
       data:"2000-10-05", 
    });
    res.send('pedido enviado');
});


app.get('/clientes',function(req,res){
    res.send('lista do cliente');
});
app.get('/servicos',function(req,res){
    res.send('lista dos servicos');
});
app.get('/pedidos',function(req,res){
    res.send('lista dos pedidos');
});


let port=process.env.PORT || 8080;

app.listen(port,(req,res)=>{
    console.log('Servidor ativo');
});

