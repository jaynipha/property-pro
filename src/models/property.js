const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const propertySchema = new Schema({
    owner: String,
    status: String,
    price: Number,
    state: String,
    city: String,
    address: String,
    type: String,
    created_on: Date,
    image_url: String
}) 

module.exports = mongoose.model('property', propertySchema);
