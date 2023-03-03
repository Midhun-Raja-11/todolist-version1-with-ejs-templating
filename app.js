const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");


const app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

var items = []; 
var workItems = [];

app.get("/",function(req,res){

  
   var day = date.getDate();
           
   res.render('list',{listTitle : day, newListItem : items});

})


app.get("/work",function(req,res){
     res.render('list',{listTitle:"Work List",newListItem : workItems})
})



app.post("/",function(req,res){
    
    if(req.body.list === "Work"){
        workItems.push(req.body.newItem);
        res.redirect("/work");
    }else{
    
        items.push(req.body.newItem);
        res.redirect("/");
    }
})




app.listen(3000,function(){
     console.log("Server is Running at PORT 3000...");
})
