const mongoose =require('mongoose');

const schema = new mongoose.Schema({
  
  name:{
    type:String,
    required: "Name Required",
    minlength:4,
    maxlength:50,
  },
  email:{
    type:String,
    required: "Email Required",
    minlength: 4,
    maxlength: 100,
  },
  phone: {
    type: Number,
    required: "Number is required",
    minlength:5,
    maxlength:10,
  },
  password:{
    type:String,
    required:"Password Required",
    minlength: 10,
    maxlength: 100,
  }

});
module.exports = mongoose.model('json', schema);