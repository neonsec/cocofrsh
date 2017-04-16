var express = require('express');
var port = process.env.PORT || 7000
var app = express();
app.use(express.static('public'));
app.get('/',(req,res)=>{
res.send(__dirname+'/public/index.html');
})

app.listen(port,()=>{
  console.log('server started')
})
