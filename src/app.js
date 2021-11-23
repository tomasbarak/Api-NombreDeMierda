//Require modules
const express =            require('express')
const bodyParser =         require('body-parser');
const cors =               require('cors');
const userInfoRoutes =     require('./routes//userInfo/userInfoRoutes')
const userCreationRoutes = require('./routes/createRoutes/userCreationRoutes.js')
const publicationCreationRoutes = require('./routes/createRoutes/publicationCreationRoutes')
var mysql =                require('mysql');

require('dotenv').config()

//Init express app
const app = express()

//App configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Make mysql connection pool
const connection = mysql.createPool({
  connectionLimit: 10,
  host     : process.env.db_host,
  user     : process.env.db_user,
  password : process.env.db_password,
  database : process.env.db_name
});

//Init express routes
userInfoRoutes.init(app, connection);
userCreationRoutes.init(app, connection);
publicationCreationRoutes.init(app, connection); 

//Start listening a port
app.listen(process.env.PORT || 3000)