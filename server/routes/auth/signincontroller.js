const signupschema = require('../../models/signupmodal');
const bcrypt = require('bcrypt');

//authorization
export function postsignin(req,res){
    signupschema.findOne({
        email:req.body.email
    },(err,doc)=>{
        if(err)console.log(err);
        if(doc){
            bcrypt.compare(req.body.password,doc.password,(err,result)=>{
                if(err)console.log(err);
                if(result)res.status(202).send({
                    message:"successfully signedin",
                    data:doc
                })
                else res.status(400).send({
                    message:"password doesnt match",
                })
            })
        }
        return res.status(404).send({
            message:"user not found",
        })
    });
}