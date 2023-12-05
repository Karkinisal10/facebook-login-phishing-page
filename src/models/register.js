const express = require("express");
const mongoose = require ("mongoose");

const userSchema = new mongoose.Schema({
    email : {
        type: String,
        required : true,
        unique : true
    },

    password : {
        type: String,
        required : true
  
    }

});

//creating a collection

const login = new mongoose.model("login",userSchema)

module.exports = login;