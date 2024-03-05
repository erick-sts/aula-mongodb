import express from 'express'
const app = express()
const port = 4000
//Efetuaremos o parse do Json
app.use(express.json())
//rotasde conteudo piublico
app.use('/', express.static('public'))
//primeira rota publica
app.get('/api', (req, res)=>{
    res.status(200).json({message:'API ok!', version:'1.0'})
})
//tratar rotas invalidas
app.use(function(req, res){
    res.status(404).json({
        errors: [{
            value: `${req.originalUrl}`,
            msg:`A rota ${req.originalUrl} não existe!`,
            param: 'invalid route',
        }]
    })
})
//ouvidor  - listen
app.listen(port, function(){
    console.log(`💻 Servidor rodando em ${port}`)
})