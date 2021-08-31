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

app.post('/clientes', async(req,res)=>{
    let crate=await cliente.create(
        req.body
    );
    res.send('Novo Cliente foi inserido');
});

app.post('/servicos', async(req,res)=>{
    let create=await servico.create(
        req.body
    );
    res.send('Serviço foi inserido!');
});

app.post('/pedidos', async(req,res)=>{
    let create=await pedido.create(
        req.body
    );
    res.send('Pedido adicionado!');
});

app.get('/listaservicos', async(req,res)=>{
    await servico.findAll({
        order:[['id', 'ASC']]
    }).then(function(servicos){
        res.json({servicos})
    });

});

app.get('/ofertas', async(req,res)=>{
    await servico.count('id')
    .then(function(servicos){
        res.json(servicos);
    });

});

app.get('/servico/:id', async(req,res)=>{
    servico.findByPk(req.params.id)
    .then(servico =>{
        return res.json({
            error: false,
            servico
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Código não está cadastrado!"
        });
    });

});

//get = importar da base de dados / linha de aplicação
//post = inserir via formulário

//visualizar todos os clientes
app.get('/listacliente', async(req,res)=>{
    await cliente.findAll({
        order:[['nome','ASC']]
    }).then(function(clientes){
        res.json({clientes})
    });

});

//visualizar os clientes em ordem de antiguidade
app.get('/ordenarclientes', async(req,res)=>{
    await cliente.findAll({
        order:[['id','ASC']]
    }).then(function(clientes){
        res.json({clientes})
    });

});

//visualizar todos os pedidos
app.get('/listapedidos', async(req,res)=>{
    await pedido.findAll({
        order:[['id','ASC']]
    }).then(function(pedidos){
        res.json({pedidos})
    });

});

//visualizar o pedido por ordem a partir do maior valor
app.get('/maiorvalor', async(req,res)=>{
    await pedido.findAll({
        order:[['valor','DESC']]
    }).then(function(pedidos){
        res.json({pedidos})
    });

});

//informar quantos clientes estão na base de dados
app.get('/qtdclientes', async(req,res)=>{
    await cliente.count('id')
    .then(function(clientes){
        res.json(clientes);
    });
  
});

//informar a quantidade de pedidos solicitados
app.get('/qtdpedidos', async(req,res)=>{
    await pedido.count('id')
    .then(function(pedidos){
        res.json(pedidos);
    });
  
});

//desafio--------total gasto por cliente
app.get('/pedido/:Id', async (req,res)=>{
    await pedido.sum('valor', {where: { ClienteId: req.params.id} })
    .then((pedido)=>{
        return res.json({
            pedido
        });
    });
});


//------------------------aula 5 - dia 31/08 ---------------------------------

app.get('/atualizaservico', async(req,res)=>{
    await servico.findByPk(1)
    .then(servico =>{
        servico.nome='HTML/CSS/JS';
        servico.descricao='Páginas estáticas e dinâmicas estilizadas';
        servico.save();
        return res.json({servico});
    });
});

app.put('/editarservico', (req,res) =>{
    servico.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message:"Serviço foi alterado com sucesso."
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro na alteração do serviço."
        });
    });
});

app.get('/servicospedidos', async(req,res)=>{
    await servico.findByPK(1, {
        include:[{all:true}]
    }).then(servico =>{
        return res.json({servico});
    })
});

app.put('/editarrpedido', (req, res) =>{
    pedido.update(req.body, {
        where: {ServicoId: req.body.ServicoId}
    }).then(function(){
        return res.json({
            error: false,
            message: "Pedido modificado com sucesso."
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Não foi possível modificar o pedido."
        });
    });
});

//exercicios em aula - 3 atividades

//buscar serviços pelo id do cliente
app.get('/buscarservico', async(req,res)=>{
    await cliente.findByPk(1, {
        include: [{all: true}],
    }).then(cliente =>{
        return res.json({cliente});
    });
});


//editar cliente usando put
app.put('/editarcliente/:id', (req,res) =>{
    servico.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message:"CLiente alterado com sucesso."
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro na alteração do cliente."
        });
    });
});


//consultar pedidos e fazer edição
app.put('/editarpedido/:id', (req,res)=>{
    pedido.update(req.body, {
    where: {id:req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "pedido alterado com sucesso"
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "erro na alteração do pedido."
        });
    });
});
   

//exercicios (passado pelo professor)

app.get('/excluircliente', async(req,res)=>{
    cliente.destroy({
        where: {id: 2}
    });
});

app.delete('/apagarcliente/:id',(req,res)=>{
    cliente.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message:"Cliente foi excluido com sucesso."
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Não foi possível excluir o cliente."
        });
    });
});



let port=process.env.PORT || 3000;

app.listen(port,(req,res)=>{
    console.log('Servidor ativo');
});