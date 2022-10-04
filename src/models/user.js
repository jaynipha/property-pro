const mongoose = require('mongoose');
const Schema = mongoose.Schema

const usersSchema = new Schema({
    emailAddress: String,
    username: String,
    phoneNumber:String,
    password: String,
    location: String,

}) 

module.exports = mongoose.model('users', usersSchema);
