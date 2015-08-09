var mongoose = require("mongoose");

var PeopleSchema = mongoose.Schema({
   name: { type: String, required: true, unique: true },
   price: { type: Number, required: true, default: 0 }
});

var Person = mongoose.model("person", PeopleSchema);

module.exports = Person;