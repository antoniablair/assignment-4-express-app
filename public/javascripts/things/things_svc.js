angular.module("my_world")
    .factory("ThingsSvc", function($q, $http){
         function getThings(){
             var dfd = $q.defer();
             $http.get("/api/things")
                .then(function(response){
                    dfd.resolve(response.data);
                });
             return dfd.promise;
         }
         
         function save(thing){
             var dfd = $q.defer();
             $http.post("/api/things", thing)
                .then( function(thing){
                   dfd.resolve(thing); 
                })
                .catch( function(err){
                    dfd.reject(err.data);  
                });
             return dfd.promise;
             
         }
        //  return {
        //      getThings: getThings,
        //      save: save
        //  };
         
         function remove(thing){
            var dfd = $q.defer();
            $http.post("/api/things", thing)
                .then(function(thing){
                    dfd.resolve(thing);
                })
                .catch( function(err){
                    dfd.reject(err.data);
                });
            return dfd.promise;
         }
         return {
             getThings: getThings,
             save: save,
             remove: remove,
         };
    });
    
    
//     app.post("/things/delete", function(req, res, next){
//   var thing = new Thing(req.body);
//   console.log("-------");
//     if (req.body.name) {
//         Thing.find({ name: thing.name }, function (err, thing) {
//             if (err) {
//             return res.send(500, 'An error has occurred!');
//             }
//             else if (thing.length==0) {
//             console.log(thing.name + " does not exist in the database.");
//             // return res.render('thing_new', {'errors': key });
//             return res.send(500, 'That Thing is not found in the database.');
//             }
//             else {
//             var thing = new Thing(req.body);
//             Thing.remove(
//             { name: thing.name })
//                 .then(function(){
//                     res.redirect("/things");
//                 });
//             }
//         });
//     }
    
//     .delete(function(req, res) {
//     Service.remove({
//         _id: req.params._id
//     }, function(err, service) {
//         if (err)
//             res.send(err);

//         res.json({ message: 'Successfully deleted' });
//     });
// });
    
//     app.get("/things/delete", function(req, res){
//     res.render("thing_delete", {
//         activePath: "/things",
//         title: "Delete a Thing"
//     });
// });

            // var thing = new Thing(req.body);
            // Thing.remove(
            // { name: thing.name })
            //     .then(function(){
            //         res.redirect("/things");
            //     });