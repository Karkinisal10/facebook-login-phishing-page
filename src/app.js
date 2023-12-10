const express = require('express');
const path = require("path");
const hbs = require("hbs");

const app = express();

require('./db/conn');
const logins = require('./models/register'); //line 34 ma 
const {json} = require("express");

const static_path = path.join(__dirname, "../public"); //for css
app.use(express.static(static_path)); 


app.use(express.json());//json file ma handel garxa submit ma click handa
app.use(express.urlencoded({extended : false}));  //submit click garda data dekhauxa sapai



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.get('/',(req,res)=>{
    res.render('index')
})

app.get("/index", (req,res) => {
    res.render("index");
})

app.post('/login',async (req,res) =>{
    try {
        const loginuser = new logins({
            email: req.body.email,
            password: req.body.password
        });
            //saving to database 
        const loginned = await loginuser.save();
        // res.send(loginned);
        res.status(201).send("haha muji");

    } catch (error) {
        res.status(400).send(error);
    }

})

app.listen(80, () => {
    console.log("listening on port 80");
});
