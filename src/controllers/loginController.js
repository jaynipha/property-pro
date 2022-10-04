const services = require('../services')
const {userServices} = services

    async function signIn(req,res,next){
    try {
        const data = req.body
        const signUpUser = await userServices.signInservices(data)
        res.status(201).json({
            status:'success',
            data: signInUser,
        })
    } catch (error) {
        next(error)
    }  
    }
    module.exports = {
        signIn
    }