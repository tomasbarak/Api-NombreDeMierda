function init (app, connection){
    app.post('/create/user/', function (req, res){
        //Query a la base de datos para crear un usuario
        connection.query('INSERT INTO publications (description, location, tags, userid) VALUES ('+ '"' + req.body.description + '", ' + '"' + req.body.location + '", ' + '"' + req.body.tags + '", ' + '"' + req.body.userid + '")' , function(error, results, fields){
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

module.exports = {init};