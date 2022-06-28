// mongoose nos permite conectarnosanuestras bases de datosyhacer CRID
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// un esquena es la estructura de datos de nuestra colección,definimos los tipos de datos y sus relaciones
const UsuarioSchema = new Schema ({
  nombre: String,
  apellido: String,
  identificacion: Number,
  edad: Number,
  
  // vinculanos al usuario muchos pagos [array]
  pago:[
   {
      type:Schema.Types.ObjectId,
      ref:"Usuario"
   }
    
   ]
});

// exportanos el modelo
var Usuario = mongoose.model("Usuario", UsuarioSchema);
module.exports = Usuario;
   