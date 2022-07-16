
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const VentaFicho = new Schema ({
  ubicacion: String,
  cantidad_fichos: Number,
  valor_ficho : Number,
  fecha: String,
  pago:{
   
      type:Schema.Types.ObjectId,
      ref:"Pago"
   }
    
   
});


var VentaFicho = mongoose.model("VentaFicho", VentafichoSchema);
module.exports = VentaFicho;
   