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
        const { password, email } = data;

        const user = await userModel.findOne({ email });
 
        //password validation
        const passwordComparsion = comparePassword(password, user.password);

        console.log(passwordComparsion, 'expect a boolean');
        if(!comparePassword) {
            return { status: 401, data: 'User Not Found'}
        }

        //CREATE TOKEN
        const token = createToken({id: user.id, email })

        return {
            status: 200, 
            data: user, ...token
        }
    }
    

// const signUpServices = async() => {}
module.exports = {
    signUpServices,
    signInServices
}