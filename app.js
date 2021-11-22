const express = require('express')
var bodyParser = require('body-parser');

require('dotenv').config()

const app = express()
var mysql = require('mysql');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host     : process.env.db_host,
  user     : process.env.db_user,
  password : process.env.db_password,
  database : process.env.db_name
});
connection.connect();

app.get('/users/:name/all/', function (req, res) {
  //Query a la base de datos para obtener un usuario
    connection.query('SELECT * from users where name = "' + req.params.name +'"', function (error, results, fields) {
        if (error){
          //Ocurrio un error
            res.status(400)
            res.send(error)
        }else{
          //Se obtuvieron los datos correctamente y se devuelven
          res.status(200)
          res.send(results)
        }
      });
  console.log(req.params.name)
})

app.post('/create/user/', function (req, res){
  //Query a la base de datos para crear un usuario
  connection.query('INSERT INTO users (name, mail, age, phone) VALUES ('+ '"' + req.body.name + '", ' + '"' + req.body.mail + '", ' + '"' + req.body.age + '", ' + '"' + req.body.phone + '")' , function(error, results, fields){
    console.log(req.body);
    if(error){
      //Ocurrio un error
      res.status(400)
      res.send(error)

    }else{
      //Los datos se insertaron correctamente
      res.status(200)
      res.send(results)

    }
  })
  
})
 
app.listen(3000)