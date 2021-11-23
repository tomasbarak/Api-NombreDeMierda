function init (app, connection){
    app.get('/users/byname/:name/all/', function (req, res) {
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

      app.get('/users/byname/:name/id/', function (req, res) {
        //Query a la base de datos para obtener un usuario
          connection.query('SELECT id from users where name = "' + req.params.name +'"', function (error, results, fields) {
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
      
      app.get('/users/byname/:name/name/', function (req, res) {
        //Query a la base de datos para obtener un usuario
          connection.query('SELECT name from users where name = "' + req.params.name +'"', function (error, results, fields) {
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

      app.get('/users/byname/:name/mail/', function (req, res) {
        //Query a la base de datos para obtener un usuario
          connection.query('SELECT mail from users where name = "' + req.params.name +'"', function (error, results, fields) {
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

      app.get('/users/byname/:name/age/', function (req, res) {
        //Query a la base de datos para obtener un usuario
          connection.query('SELECT age from users where name = "' + req.params.name +'"', function (error, results, fields) {
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

      app.get('/users/byname/:name/phone/', function (req, res) {
        //Query a la base de datos para obtener un usuario
          connection.query('SELECT phone from users where name = "' + req.params.name +'"', function (error, results, fields) {
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

}
module.exports = {init};