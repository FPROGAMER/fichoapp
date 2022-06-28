const express = require("express")
const app = express();

require("./bin/conect");
require("./bin/middlewares")(app)
require("./bin/routes")(app);



app.listen(3000, ()=>{
  console.log('El servidor está levantado')
})