var express = require('express');

var app = express();
app.use(express.static('public'));
app.get('/',(req,res)=>{
res.send(__dirname+'/public/index.html');
})

app.listen(process.env.PORT,()=>{
  console.log('server started')
})
