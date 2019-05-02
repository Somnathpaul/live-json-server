exports.homePage=(req, res)=>{
  if(res){
    res.write(`<h1>API micro-servise</h1>`);
    console.log('User In Home Page');
    
  }
}