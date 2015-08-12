var express = require("express");
var router = express.Router();
var Thing = require("../models/things")

router.get("/", function(req, res){
   Thing.find({}).then(function(things){
       res.send(things);
   }); 
});

router.get("/:id", function(req, res){
        Thing.findById(req.params.id).exec(function(err, thing){
        res.send(thing);
        }); 
    });

//  router.get('/api/things/:_id', function(req, res, next) {
//     var _id = req.params._id;
//     things.getOneThing(_id, function (err, _id) {
//       if (err) handleError(err, res);
//       res.status(200);
//       res.send(err);
//     });
//  })

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

router.post("/:id/", function(req, res){
  Thing.update({ _id: req.params.id } , { name: req.body.name, price: req.body.price }, function(err, result){
    if(err){
      res.status(500).send(err); 
    }
    else{
      res.send(result); 
    }
  });
});

   router.delete("/:id", function(req, res){
   Thing.remove({_id: req.params.id}).exec(function(){
      res.send({deleted: true});
   });
});

   //  var _id = req.params._id;
//     Thing.remove({
//       _id : thing._id
//    })
//       .then(function(){
//          res.redirect("/");
   // });




// router.delete("/", function(req, res, next){
//    var thing = new Thing(req.body);
//    if (req.body.thing) {
//          Thing.find({ _id: thing._id }, function (err, thing) {
//          if (err) {
//             res.status(422);
//             res.send(err);
//          }
//          else {
//             Thing.remove(
//                { name: thing.name })
//                .then(function(){
//                   res.redirect("/");
//             });
//       };
// });
//    }
// });


// router.delete("/", function(req, res){
//    var thing = new Thing(req.body);
//    Thing.remove({
//       _id : req.params.thing_id
//    })
//       .then(function(){
//          res.redirect("/");
//    });
// });


// router.delete("/", function(req, res){
//    var thing = new Thing(req.body);
//    Thing.remove({
//       _id : req.params.thing_id
//    })
//       .then(function(){
//          res.redirect("/");
//    });
// });



// router.delete("/", function(req, res, next){
//    var thing = new Thing(req.body);

//    if (req.body.name) {
//       Thing.find({ id: thing._id }, function (err, thing) {
//          if (err) {
//             res.status(422);
//             res.send(err);
//          }
//          else if (thing.length==0) {
//             return res.send(500, 'That Thing is not found in the database');
//          }
//          else {
//             var thing = new Thing(req.body);
//             Thing.remove(
//                { name: thing.name })
//                .then(function(){
//                   res.redirect("/");
//             });
//          }
//       });
//    }
// });

module.exports = router;