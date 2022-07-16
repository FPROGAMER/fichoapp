const Usuario = require("./models/Usuario");
const Pago = require("./models/Pago");


// USUARIO

// CREAR UN USUARIO NUEVO
const postUsuario = (usuario, res)=>{
  Usuario.create(usuario,(err, u)=>{
      if(err)throw err
      res.send(u);
    })
 }

// BUSCAR TODOS LOS USUARIOS
const getUsuarios = (res)=>{
  Usuario.find({})
     // ´populamos la busqueda
    .populate('pago')
    .exec((err, u)=>{
    if(err)throw err
    res.send(u);
    
    })
  }

// BUSCAR UN USUARIO POR SU ID
const getUsuarioPorId = (id,res)=>{
  // Buscamos
    Usuario.find({_id:id})
      // ´populamos la busqueda
      .populate('pago')
      // Mostramos resultados
      .exec((err, u)=>{
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




//PAGO


// CREAR UN PAGO
const postPago = (pagos, res)=>{
  Pago.create(pagos,(err, p)=>{
      if(err)throw err
      res.send(p);
    })
 }

// BUSCAR TODOS LOS PAGOS
const getPagos = (res)=>{
  Pago.find({},(err, p)=>{
    if(err)throw err
    res.send(p);
    
    })
  }

// TRAER UN PAGO POR SU ID
const getPagoPorId = (id,res)=>{
    Pago.find({_id:id},(err, p)=>{
      if(err)throw err
      res.send(p)
    })
  }

// MODIFICAR UN PAGO POR SU ID
const updatePagoPorId = (id, pago , res)=>{
    Pago.findByIdAndUpdate({_id:id}, pago, (err, p)=>{
      if(err)throw err
      res.send(p)   
    })
  }

// ELIMINAR UN PAGO POR SU ID
const deletePagoPorId = (id, res)=>{
   Pago.findByIdAndDelete({_id:id},(err, p)=>{
      if(err)throw err
      res.send(p)
    })
  }

// CRUD USUARIOS Y PAGOS
module.exports ={
  postUsuario,
  getUsuarios,
  getUsuarioPorId,
  updateUsuarioPorId,
  deleteUsuarioPorId,
  postPago,
  getPagos,
  getPagoPorId,
  updatePagoPorId,
  deletePagoPorId
  
  
}