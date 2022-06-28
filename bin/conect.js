const mongoose = require("mongoose");
// user:fabianluna
// pass:0hJNlPXv1KwMVyp5
// Intentamos conectarnos
try{
// se intenta establecer una conexton con los datos de conexion
    mongoose.connect("mongodb+srv://fabianluna:0hJNlPXv1KwMVyp5@cluster0.gyo58gn.mongodb.net/?retryWrites=true&w=majority",
        {useNewUrlParser: true }
    );
//en caso de establecer la caneston,se muestra en consola este consaje
    console.log("Connected databases.");
} catch (e) {
    // en caso de haber un error se muestra en consola el error
    console.error(e);
}