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

app.get('/servicio/:tipo', (req, res) => {
  let tipo = String(req.params.tipo);
  if(tipo=="1"){
    return res.json({
      success: true,
      tipo: tipo,
      resultado: [
        {
          "Id": 1,
          "Tipo": "Empresa",
          "Nombre": "Affipay"
        },
        {
          "Id": 2,
          "Tipo": "Empresa",
          "Nombre": "Cash In"
        },
        {
          "Id": 3,
          "Tipo": "Empresa",
          "Nombre": "Fri"
        },
        {
          "Id": 4,
          "Tipo": "Empresa",
          "Nombre": "Ingesis"
        },
        {
          "Id": 5,
          "Tipo": "Empresa",
          "Nombre": "Pos Movil"
        }
      ]
    });
  }else if(tipo=="2"){
    return res.json({
      success: true,
      tipo: tipo,
      resultado: [
        {
          "Id": 6,
          "Tipo": "Socio",
          "Nombre": "BAM"
        },
        {
          "Id": 7,
          "Tipo": "Socio",
          "Nombre": "Banco G&T Continental"
        },
        {
          "Id": 8,
          "Tipo": "Socio",
          "Nombre": "Banrural"
        },
        {
          "Id": 9,
          "Tipo": "Socio",
          "Nombre": "Inter Banco"
        },
        {
          "Id": 10,
          "Tipo": "Socio",
          "Nombre": "Visa"
        }
      ]
    });
  }else if(tipo=="3"){
    return res.json({
      success: true,
      tipo: tipo,
      resultado: [
        {
          "Id": 11,
          "Tipo": "Aliado",
          "Nombre": "Huawei Cloud"
        },
        {
          "Id": 12,
          "Tipo": "Aliado",
          "Nombre": "SMT"
        },
        {
          "Id": 13,
          "Tipo": "Aliado",
          "Nombre": "Oracle"
        },
        {
          "Id": 14,
          "Tipo": "Aliado",
          "Nombre": "Finnovista"
        },
        {
          "Id": 15,
          "Tipo": "Aliado",
          "Nombre": "Finde x Able"
        }
      ]
    });
  }else{
    return res.json({
      success: true,
      tipo: tipo,
      resultado: [
        {
          "Id": 1,
          "Tipo": "Empresa",
          "Nombre": "Affipay"
        },
        {
          "Id": 2,
          "Tipo": "Empresa",
          "Nombre": "Cash In"
        },
        {
          "Id": 3,
          "Tipo": "Empresa",
          "Nombre": "Fri"
        },
        {
          "Id": 4,
          "Tipo": "Empresa",
          "Nombre": "Ingesis"
        },
        {
          "Id": 5,
          "Tipo": "Empresa",
          "Nombre": "Pos Movil"
        },
        {
          "Id": 6,
          "Tipo": "Socio",
          "Nombre": "BAM"
        },
        {
          "Id": 7,
          "Tipo": "Socio",
          "Nombre": "Banco G&T Continental"
        },
        {
          "Id": 8,
          "Tipo": "Socio",
          "Nombre": "Banrural"
        },
        {
          "Id": 9,
          "Tipo": "Socio",
          "Nombre": "Inter Banco"
        },
        {
          "Id": 10,
          "Tipo": "Socio",
          "Nombre": "Visa"
        },
        {
          "Id": 11,
          "Tipo": "Aliado",
          "Nombre": "Huawei Cloud"
        },
        {
          "Id": 12,
          "Tipo": "Aliado",
          "Nombre": "SMT"
        },
        {
          "Id": 13,
          "Tipo": "Aliado",
          "Nombre": "Oracle"
        },
        {
          "Id": 14,
          "Tipo": "Aliado",
          "Nombre": "Finnovista"
        },
        {
          "Id": 15,
          "Tipo": "Aliado",
          "Nombre": "Finde x Able"
        }
      ]
    });
  }

})