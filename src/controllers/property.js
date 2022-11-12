const propertyServices = require('../services/propertyService');

const { createPropertyAdvert } = propertyServices;

async function createAd (req, res, next){
    try {
        const data = req.body;
        const file = req.file;
        const propertyData = await createPropertyAdvert(data, file);

        res.status(201).json({
            status:'success',
            data: propertyData,
        })
    } catch (error) {
        next(error)
    }
}


module.exports = { createAd };