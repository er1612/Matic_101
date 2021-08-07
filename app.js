const express = require('express')
const app = express()
const port = 3000

var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
};

app.use(allowCrossDomain);

/*app.get('/', (req, res) => {
  res.send('¡Hola Mundo! Desde Ubuntu AWS')
})*/

app.get('/', function(request, response){
  response.sendFile('pages/index.html', { root : __dirname});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/socios', (req, res) => {
  return res.json({
    success: true,
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
})

app.get('/productos/:id', (req, res) => {
  let id = String(req.params.id);
  switch (id) {
    case "1":
      return res.json({
        "id": 1,
        "title": "Sony WH-CH510",
        "price": 265,
        "category": "Special Products"
      });
      break;
    case "2":
      return res.json({
        "id": 2,
        "title": "Apple iPhone 11",
        "price": 300,
        "category": "Special Products"
      });
      break;
    case "3":
      return res.json({
        "id": 3,
        "title": "Sony WH-CH510",
        "price": 265,
        "category": "Special Products"
      });
      break;
    case "4":
      return res.json({
        "id": 4,
        "title": "Apple iPhone 11",
        "price": 850,
        "category": "Special Products"
      });
      break;
    case "5":
      return res.json({
        "id": 5,
        "title": "Sony WH-CH510",
        "price": 250,
        "category": "Special Products"
      });
      break;
    case "6":
      return res.json({
        "id": 6,
        "title": "Apple iPhone 11",
        "price": 760,
        "category": "Featured Products"
      });
      break;
    case "7":
      return res.json({
        "id": 7,
        "title": "Sony WH-CH510",
        "price": 365,
        "category": "Featured Products"
      });
      break;
    case "8":
      return res.json({
        "id": 8,
        "title": "Apple iPhone 11",
        "price": 290,
        "category": "Featured Products"
      });
      break;
    case "9":
      return res.json({
        "id": 9,
        "title": "Sony WH-CH510",
        "price": 320,
        "category": "Special Products"
      });
      break;
    case "10":
      return res.json({
        "id": 10,
        "title": "Apple iPhone 11 Pro",
        "price": 385,
        "category": "Special Products"
      });
      break;
    case "11":
      return res.json({
        "id": 11,
        "title": "Sony WH-CH510",
        "price": 475,
        "category": "Special Products"
      });
      break;
    case "12":
      return res.json({
        "id": 12,
        "title": "Sony WH-CH510",
        "price": 850,
        "category": "Special Products"
      });
      break;
    case "13":
      return res.json({
        "id": 13,
        "title": "Apple iPhone 11",
        "price": 800,
        "category": "Trending Products"
      });
      break;
    case "14":
      return res.json({
        "id": 14,
        "title": "Sony WH-CH510",
        "price": 360,
        "category": "Trending Products"
      });
      break;
    case "15":
      return res.json({
        "id": 15,
        "title": "Sony WH-CH510",
        "price": 305,
        "category": "Trending Products"
      });
      break;
    default:
      return res.json({
        "id": 0,
        "title": "no encontrado",
        "price": 0,
        "category": "no encontrado"
      });
  }
})