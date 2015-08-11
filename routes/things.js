var express = require("express");
var router = express.Router();
var Thing = require("../models/things")

router.get("/", function(req, res){
   Thing.find({}).then(function(things){
       res.send(things);
   }); 
});

router.post("/", function(req, res){
   var thing = new Thing(req.body);
   thing.save(function(err, _thing){
      if(err){
         res.status(422); 
         res.send(err);
      }
      else
         res.send(thing);
   });
});

router.delete("/", function(req, res, next){
   var thing = new Thing(req.body);
   console.log("in the router");
   if (req.body.name) {
      Thing.find({ name: thing.name }, function (err, thing) {
         if (err) {
            res.status(422);
            res.send(err);
         }
         else if (thing.length==0) {
            return res.send(500, 'That Thing is not found in the database');
         }
         else {
            var thing = new Thing(req.body);
            Thing.remove(
               { name: thing.name })
               .then(function(){
                  res.redirect("/");
            });
         }
      });
   }
});

module.exports = router;