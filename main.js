const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose =require('mongoose');

const app =  express();

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/json', {useNewUrlParser: true}).then( ()=>{
  console.log(`MongoDB Successfully Connected`);
  
});
//On connection erroe
mongoose.connection.on('ERROR',(err)=>{
  console.log(`Unable to conncet MongoDB`);
  console.log(`Reason: ${err}`);
  
  
})

const port =  8282;
const router = require('./router/route');

//middleware
app.use(morgan('dev'));

//body-parser
app.use(bodyParser.json());
//router connection
app.use('/',router);

app.listen(port, ()=>{
  console.log(`listening on port: ${port}`);
  
})