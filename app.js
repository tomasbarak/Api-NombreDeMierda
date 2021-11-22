const express = require('express')
var bodyParser = require('body-parser');

const app = express()
var mysql      = require('mysql');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var connection = mysql.createConnection({
  host     : process.env.db_host,
  user     : process.env.user,
  password : process.env.password,
  database : process.env.name
});
connection.connect();

app.get('/users/:name/all/', function (req, res) {
    connection.query('SELECT * from users where name = "' + req.params.name +'"', function (error, results, fields) {
        if (error){
            res.status(400)
            res.send(error)
        } 
        res.status(200)
        res.send(results)
      });
  console.log(req.params.name)
})
app.post('/create/user/', function (req, res){
  connection.query('INSERT INTO users (name, mail, age, phone) VALUES ('+ '"' + req.body.name + '", ' + '"' + req.body.mail + '", ' + '"' + req.body.age + '", ' + '"' + req.body.phone + '")' , function(error, results, fields){
    console.log(req.body);
    if(error){
      res.status(400)
      res.send(error)
    }else{
      res.status(200)
      res.send(results)
    }
  })
  
})
 
app.listen(3000)