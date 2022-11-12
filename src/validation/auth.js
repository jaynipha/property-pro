const Joi = require('joi');


const signupSchema = {
  first_name: Joi.string().trim().required(),
  last_name: Joi.string().trim().required(),
  email: Joi.string().trim().email({ minDomainSegments: 2 }).required(),
  phoneNumber: Joi.string().required(),
  address: Joi.string().trim(),
  password: Joi.string().trim().min(4).max(30).required(),
  is_admin: Joi.boolean(),
};

const signinSchema = {
    email: Joi.string().trim().email({ minDomainSegments: 2 }).required(),
    password: Joi.string().trim().min(4).max(30).required(),
 
  };

module.exports = { signupSchema, signinSchema }