const signupschema = require('../../models/signupmodal');
const bcrypt = require('bcrypt');
export async function postsignup(req,res){
    if(!req.body.email.includes("@gbpuat-tech.ac.in") || !req.body.email.includes(req.body.id_number)){
        res.status(400).send({
            message:"Invalid details provided"
        })
    }
    else if(req.body.password && req.body.confirm_password){
        if(req.body.password !== req.body.confirm_password){
            return res.status(400).send({
                message:"passwords doesnt matches",
            });
        }
    bcrypt.hash(req.body.password,10,(err,hashedpassword)=>{
      if(err)console.log(err);
      try{
        await signupschema.create({
            name:(req.body.email.replace("@gbpuat-tech.ac.in","")).replace(`${req.body.id_number}_`,""),
            email:req.body.email,
            password:hashedpassword,
            confirm_password:hashedpassword
        },(err,doc)=>{
            if(err)console.log(err);
            console.log(`successfully created account : ${doc}`);
            res.status(201).send({
                message:"successfully created account",
                data:doc
            })
        })
      }
      catch(err){
          console.log(err);
      }
        });
    }
}