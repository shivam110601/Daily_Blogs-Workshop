const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const app = express();



const blogs = [];

let theDate = new Date();
// let month = theDate.getMonth();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/",function(req,res){
    res.render("home");
});

app.get("/compose",function(req,res){
    res.render("compose");
});

app.get("/blogs",function(req,res){
    res.render("blogs",{blogs:blogs});
});


app.post("/compose",function(req,res){
    const blog = {
        title: req.body.blogTitle,
        content: req.body.blogBody,
        time: theDate.toLocaleDateString()
    }


    blogs.push(blog);


    res.redirect("/blogs");
});





app.listen(process.env.PORT || 3000,function(){
    console.log('server is running')
})