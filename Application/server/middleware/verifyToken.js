const express = require('express');


// Middleware for verfiy token
  function verifyToken(req,res,next){
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
const bearer = bearerHeader.split(" ");
const token=bearer[1];
req.token=token;
next();
    }else{
      res.send({
        result:"token is not valid"
      })
    }
  }

 

module.exports = verifyToken;

