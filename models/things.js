var mongoose = require("mongoose");
var ThingSchema = mongoose.Schema({
    name: { type: String, required:true, unique: true }, 
    price: { type: Number, required: true, default: 0 }
});

var Thing = mongoose.model("thing", ThingSchema);

var PeopleSchema = mongoose.Schema({
   name: { type: String, required: true, unique: true },
   price: { type: Number, required: true, default: 0 }
});

var Person = mongoose.model("person", PersonSchema);

module.exports = Thing;
module.exports = Person;