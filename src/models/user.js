const mongoose = require('mongoose');
const Schema = mongoose.Schema

const usersSchema = new Schema({
    email: String,
    first_name: String,
    last_name: String,
    phoneNumber:String,
    password: String,
    address: String,
    is_admin: Boolean,
}) 

module.exports = mongoose.model('users', usersSchema);
