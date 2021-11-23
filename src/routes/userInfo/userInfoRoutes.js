//Require modules
const byname = require('./byname/userInfoByName')
const byid = require('./byid/userInfoById')

//Init routes
function init (app, connection){
    byname.init(app, connection);
    byid.init(app, connection);
}
module.exports = {init}