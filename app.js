const express = require('express')
const app = express()
const port = 3000

/*app.get('/', (req, res) => {
  res.send('¡Hola Mundo! Desde Ubuntu AWS')
})*/

app.get('/', function(request, response){
  response.sendFile('pages/index.html', { root : __dirname});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/clientes/:idcliente', (req, res) => {
  let idcliente = req.params.idcliente;
  return res.json({
    success: true,
    cliente: idcliente
  });
})