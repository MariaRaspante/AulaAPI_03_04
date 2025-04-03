const a = require('express')
const b = a()

b.get('/meuendpoint', (request, response)=> {
    response.send('Sua resposta aqui')
})

b.listen(3001,()=>{
    console.log("Abriu a porta")    
})