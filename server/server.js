const path=require('path')
const express=require('Express')
const publicPath=path.join(__dirname,'/../public')
const port=3000
var app=express();

app.use(express.static(publicPath))
app.listen(port,()=>
{

})