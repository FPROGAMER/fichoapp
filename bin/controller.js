const Usuario = require("./models/Usuario");

// CREAR UN USUARIO NUEVO
const postUsuario = (usuario, res)=>{
  Usuario.create(usuario,(err, u)=>{
      if(err)throw err
      res.send(u);
    })
 }

// BUSCAR TODOS LOS USUARIOS
const getUsuario = (res)=>{
  Usuario.find({},(err, u)=>{
    if(err)throw err
    res.send(u);
    
    })
  }

// BUSCAR UN USUARIO POR SU ID
const getUsuarioPorId = (id,res)=>{
    Usuario.find({_id:id},(err, u)=>{
      if(err)throw err
      res.send(u)
    })
  }

// MODIFICAR UN USUARIO POR SU ID
const updateUsuarioPorId = (id, usuario , res)=>{
    Usuario.findByIdAndUpdate({_id:id}, usuario, (err, u)=>{
      if(err)throw err
      res.send(u)   
    })
  }

// ELIMINAR UN ESTUDIANTE POR SU ID
const deleteUsuarioPorId = (id, res)=>{
   Usuario.findByIdAndDelete({_id:id},(err, u)=>{
      if(err)throw err
      res.send(u)
    })
  }

// CRUD USUARIOS
module.exports ={
  postUsuario,
  getUsuario,
  getUsuarioPorId,
  updateUsuarioPorId,
  deleteUsuarioPorId
}