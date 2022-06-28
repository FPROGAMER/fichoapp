const controller = require("./controller")

module.exports = (app)=>{
app.get("/",(req, res)=>{
  res.send("PAGINA PRINCIPAL")
})
//Traer todos los usuarios
app.get("/usuario",(req, res)=>{
  controller.getUsuario(res)
})
  
//Crear un estudiante
app.post("/usuarios",(req, res)=>{
  let usuario = req.body
  controller.postUsuario(usuario, res)
 })

  
//Traer usuarios por su id
app.get("/usuarios/:id",(req, res)=>{
  let id = req.params.id
  controller.getUsuarioPorId(id, res)
})

//Modificar un estudiante
  app.put("/usuarios/:id",(req, res)=>{
   let id = req.params.id;
    let usuario = req.body
    controller.updateUsuarioPorId(id, usuario, res)
  })

//Eliminar un estudiante
  app.delete("/usuarios/:id",(req, res)=>{
    let id = req.params.id
    controller.deleteUsuarioPorId(id, res)
  })
  
}
