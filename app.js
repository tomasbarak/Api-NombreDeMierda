const express = require('express')
const app = express()
var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'sql10.freemysqlhosting.net',
  user     : 'sql10452023',
  password : 'pVRwvnxw5D',
  database : 'sql10452023'
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
 
app.listen(3000)