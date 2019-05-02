const post = require('../models/postData');

exports.createPost = (req, res)=>{
  //objcer of modle
  const data = new post(req.body);
  console.log(`Post: ${data}`);
  
  data.save( (err, result)=>{
    if(err){  
      console.log(`Error`);
          
      return res.status(400).json({
        message: "Error",
        status: 400,
        error: err
      })
    } else if(res.statusCode ===200){
      console.log(`Post saved on database`);
      
      return res.status(200).json({
        message: "Success",
        status: 200,
        post: result
      })
    }
  });
}