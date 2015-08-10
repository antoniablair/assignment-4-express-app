var mongoose = require("mongoose");

var PersonSchema = mongoose.Schema({
   name: { type: String, required: true, unique: true },
});

var Person = mongoose.model("Person", PersonSchema);

module.exports = Person;