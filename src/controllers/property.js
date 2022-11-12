const propertyServices = require('../services/propertyService');

const { createPropertyAdvert, editPropertyData } = propertyServices;

async function createAd (req, res, next){
    try {
        const data = req.body;
        const file = req.file;
        const propertyData = await createPropertyAdvert(data, file);

        res.status(201).json({
            status:'success',
            data: propertyData,
        });

    } catch (error) {
        next(error)
    }
}

async function updatePropertyData(req, res, next) {
    try {

        const data = req.body;
        const id = req.params.id;
        const updatedData = await editPropertyData(data, id);

        res.status(200).json({
            status:'success',
            data: updatedData,
        });
    } catch (error) {
        next(error)
    }
}


module.exports = { createAd, updatePropertyData };