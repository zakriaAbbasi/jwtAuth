var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userschema = new Schema(
  {
    name: {type: String, required: true, max: 100},
    password: {type: String, required: true, max: 100},
    admin: Boolean  
}
);



//Export model
module.exports = mongoose.model('User', userschema);