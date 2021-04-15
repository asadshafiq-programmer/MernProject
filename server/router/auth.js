const { request } = require('express');
const express  = require('express');
const router = express.Router();
require('../db/conn');
const User = require("../model/userschema");
router.get('/',(req,res)=>{
    res.send('Home page bitch');
})
// Promises method //

//router.post('/register', (req,res)=>{
//    const {name , email , phone , work , password  , cpassword} = req.body;
//    if(!name || !email || !phone || !work || !password  || !cpassword){
//        return res.status(420).json({error:"error"});
        
//    }


  //  res.json({message: req.body});
   // res.send("mera lora");
    
//   User.findOne({email: email})
   //.then((userExist) => {
  //     if(userExist){
  //         return res.status(422).json({ error:"Email already exist"});
//       }
//       const user_ = new User({name , email , phone , work , password  , cpassword});

//       user_.save().then(() => {
//        res.status(201).json({message:"Register successfully"});
//       }).catch((err)=> res.status(500).json({error:"failed to register"}));
//
//   }).catch(err => {console.log(err);});
//});
// end ///


// Async Method//



router.post('/register',async (req,res)=>{
    const {name , email , phone , work , password  , cpassword} = req.body;
    if(!name || !email || !phone || !work || !password  || !cpassword){
        return res.status(420).json({error:"filled properly"});    
    }
    try{
     const userExist = await User.findOne({email: email})
     if(userExist){
        return res.status(422).json({ error:"Email already exist"});
    }    
    const user_ = new User({name , email , phone , work , password  , cpassword});
    await user_.save();
     res.status(201).json({message:"Register successfully"});

}
    catch (err){
        console.log(err);
    }    
   
});


//login rude **************

router.post('/signin',async(req,res)=>{
    //console.log(req.body);
    //res.json({message:"awesome"});
    try {
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({error:"plz filled the form"})
        }

        const  userLogin = await User.findOne({email : email});
        console.log(userLogin);
        if (!userLogin){
            res.status(400).json({message:"user error"});
        }
        else{
            res.json({message:"login sucessfully"});
        }
        

    } catch (error) {
        console.log(error)
    }

})
module.exports = router;