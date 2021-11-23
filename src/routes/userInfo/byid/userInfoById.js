function init(app, connection){
    app.get('/users/byid/:id/all/', function (req, res) {
        //Query a la base de datos para obtener un usuario
          connection.query('SELECT * from users where id = "' + req.params.id +'"', function (error, results, fields) {
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
      })

      app.get('/users/byid/:id/id/', function (req, res) {
        //Query a la base de datos para obtener un usuario
          connection.query('SELECT id from users where id = "' + req.params.id +'"', function (error, results, fields) {
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
      })
      
      app.get('/users/byid/:id/name/', function (req, res) {
        //Query a la base de datos para obtener un usuario
          connection.query('SELECT name from users where id = "' + req.params.id +'"', function (error, results, fields) {
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
      })

      app.get('/users/byid/:id/mail/', function (req, res) {
        //Query a la base de datos para obtener un usuario
          connection.query('SELECT mail from users where name = "' + req.params.id +'"', function (error, results, fields) {
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
      })

      app.get('/users/byid/:id/age/', function (req, res) {
        //Query a la base de datos para obtener un usuario
          connection.query('SELECT age from users where id = "' + req.params.id +'"', function (error, results, fields) {
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
      })

      app.get('/users/byid/:id/phone/', function (req, res) {
        //Query a la base de datos para obtener un usuario
          connection.query('SELECT phone from users where id = "' + req.params.id +'"', function (error, results, fields) {
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
      })
}
module.exports = {init};