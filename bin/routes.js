const controller = require("./controller")

module.exports = (app)=>{
app.get("/",(req, res)=>{
  res.send("PAGINA PRINCIPAL")
})

  // USUARIOS
  
//Traer todos los usuarios
app.get("/usuarios",(req, res)=>{
  controller.getUsuarios(res)
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


  
// PAGOS

//Traer todos los pagos
app.get("/pagos",(req, res)=>{
  controller.getPagos(res)
})

  // Crear un pago
  app.post("/pagos",(req, res)=>{
  let pago = req.body
  controller.postPago(pago, res)
 })
  
//Traer pagos por su id
app.get("/pagos/:id",(req, res)=>{
  let id = req.params.id
  controller.getPagoPorId(id, res)
})

//Modificar un pago
  app.put("/pagos/:id",(req, res)=>{
   let id = req.params.id;
    let pago = req.body
    controller.updatePagoPorId(id, pago, res)
  })

//Eliminar un pago
  app.delete("/pagos/:id",(req, res)=>{
    let id = req.params.id
    controller.deletePagoPorId(id, res)
  })
  

}
