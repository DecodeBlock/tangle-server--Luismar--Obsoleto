const express=require('express');
const router=express.Router();

const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const UserSchema=new Schema({
    wallet:{type: String, required: true},
    name:{type: String, required: false},
    date:{type: String, required: false},
    nacionality:{type: String, required: false},
    sex:{type: String, required: false},
    image:{type: String, required: false}
});

const ModeloUsuario=mongoose.model('Usuario',UserSchema);
module.exports=router;

router.get('/ejemplo', async(req, res) => {
    res.end('Bienvenidos')
  })

router.post('/agregarusuario', async(req, res) => {
    const user=new ModeloUsuario({
      wallet:req.body.wallet,
      name:req.body.name,
      date:req.body.date,
      nacionality:req.body.nacionality,
      sex:req.body.sex,
      image:req.body.image

    });
    user.save();
    res.json({status:'User saved'});
  }) 

router.post('/obtenerusuario', async(req, res) => {
  let value_req=req.body;
  value_req=Object.keys(value_req)[0];
    const get_user= await ModeloUsuario.find({wallet: value_req});
    if(get_user=='')
    {
      res.send(false)
    }
    else{
      res.send(get_user);
    }
    
}) 

router.post('/actualizarusuario', async(req, res) => {
  const{wallet, name, sex, date, nacionality, image}=req.body;
  const newUser={wallet, name, sex, date, nacionality, image};
  await ModeloUsuario.findOneAndUpdate({wallet:req.body.wallet}, newUser);
  res.json({status:'User Updated'});
  }) 

/*



  //actualizar usuario



//obtener usuario por su direccion de wallet



*/