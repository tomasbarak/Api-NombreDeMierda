function init (app, connection){
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
}
module.exports = {init}