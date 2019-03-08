var express = require('express');
var router = express.Router();
var multer =require('multer');
var path= require('path');



router.post('/auth', function(req, res, next) {
    const logindata=req.body;
    name=logindata.name;
    pwd=logindata.pwd;
    
    if(name==user.name && pwd==user.pwd){
        
        res.render('profile',{name:name,pwd:pwd});
    }else{
        res.redirect('/');
    }
    
  });


  router.get('/register',(req,res)=>{
    res.render('register',null);
})


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'../public/images/'));
    },
    filename: function (req, file, cb) {
      cb(null,  file.originalname);
    }
  })
   
  var upload = multer({ storage: storage });

    router.post('/addprofile', upload.single('imgUploader'), function (req, res, next) {
        const file = req.file
        if (!file) {
          const error = new Error('Please upload a file')
          error.httpStatusCode = 400
          return next(error)
        }else  if (file['mimetype']!== 'image/png' && file['mimetype']!== 'image/jpeg'){
            res.send('failed to upload');
            //res.send(403)   //forbidden error
         
        }else{
            //res.send("check your mail for activation link");
            res.redirect('/');
            
          }
          
  })
  module.exports=router;