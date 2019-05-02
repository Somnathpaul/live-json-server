const post = require('../models/postData');

exports.getData = ( (req, res)=>{
  const data = post.find().then( (data)=>{
    res.status(200).json({
      message: "success",
      status: 200,
      post: data
    })
  })
  .catch((err)=>{
    console.log(err);
    
  })
})