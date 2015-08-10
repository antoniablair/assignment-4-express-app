var express = require("express");
var router = express.Router();
var Person = require("../models/people")

router.get("/", function(req, res){
   Person.find({}).then(function(people){
       res.send(people);
   }); 
});

router.post("/", function(req, res){
   var person = new Person(req.body);
   person.save(function(err, _person){
      if(err){
         res.status(422); 
         res.send(err);
      }
      else
         res.send(person);
   });
});

module.exports = router;