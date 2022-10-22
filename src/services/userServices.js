const userModel = require('../models/user')
const {ToolBox} = require('../utils')
const { createToken, hashPassword, comparePassword } = ToolBox


async function signUpServices(data) {
    const { password } = data;
    data.password = hashPassword(password)
    
    const res = await userModel.create(data)
    await res.save();
    return res 
    }


    async function signInServices(data) {
        if(!data){
            return 'ERROR HAS OCCURRED!!'
        }
        const { password, emailAddress } = data;

        const user = await userModel.findOne({ emailAddress });
 
        //password validation
        const passwordComparsion = comparePassword(password, user.password);
        if(!passwordComparsion) {
            return { status: 401, data: 'User Not Found'}
        }

        //CREATE TOKEN
        const token = createToken({id: user.id, emailAddress })
        return {
            status: 200, 
            data: user,
            token
        }
    }
    

// const signUpServices = async() => {}
module.exports = {
    signUpServices,
    signInServices
}