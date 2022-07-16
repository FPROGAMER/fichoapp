const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FichoSchema = new Schema ({
  turno: Number,
  pin: Number,
  pago:{
   
      type:Schema.Types.ObjectId,
      ref:"Pago"
  }
  });

var Ficho = mongoose.model("Ficho", FichoSchema);
module.exports = Ficho;