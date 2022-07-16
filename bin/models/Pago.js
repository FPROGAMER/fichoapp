// mongoose nos permite conectarnosanuestras bases de datos y hacer CRID
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// un esquena es la estructura de datos de nuestra colección,definimos los tipos de datos y sus relaciones
const PagoSchema = new Schema ({
  detalles: String,
  plataforma_financiera: String,
  numero_cuenta: Number,
  fecha: String,
  
  // vinculanos el pago a un solo usuario Object
  usuario:{
      type:Schema.Types.ObjectId,
      ref:"Pago"
   }
});

// exportanos el modelo
var Pago = mongoose.model("Pago", PagoSchema);
module.exports = Pago;
   