const fs = require('fs');
const cloudinary = require('cloudinary').v2;

const propertyModel = require('../models/property');
const { CLOUD_NAME, API_KEY, API_SECRET } = require('../config/env');

// const { ToolBox } = require('../utils');
// const { createToken, hashPassword, comparePassword } = ToolBox;

cloudinary.config({
        api_key: API_KEY,
        cloud_name: CLOUD_NAME,
        api_secret: API_SECRET,
})

async function createPropertyAdvert(data, file) {
    
     const imageUrl = await cloudinary.uploader.upload(file.path)
        fs.unlink(file.path, (error, result) => {
            console.log(`File deleted !`);
    });

    const dataObject = {
        ...data,
        image_url: imageUrl.url,
        created_on: new Date(),
        status: 'available'
    }

    const output = await propertyModel.create(dataObject);
    await output.save();

    return output;   
}

async function editPropertyData(data, id) {
    console.log(data, id, '=======');
}

module.exports = {
    createPropertyAdvert,
    editPropertyData
}