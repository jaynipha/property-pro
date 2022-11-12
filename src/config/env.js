const  joi = require('joi');
const logger = require('../logger');

require('dotenv').config();

const schema = joi
  .object({
    NODE_ENV: joi
      .string()
      .valid('development', 'production', 'test', 'provision')
      .default('development'),
      TOKEN_EXPIRES: joi.number(),
      PORT: joi.number().required(),
  })
  .unknown()
  .required();

const { error, value: env } = schema.validate(process.env);

if (error) {
  logger.error(`Config validation error: ${error.message}`);
}


const config = {
  PORT: env.PORT,
  env: env.NODE_ENV,
  MONGODB_URL: env.MONGO_URL,
  SESSION_SECRET: env.SESSION_SECRET,
  CLOUD_NAME: env.CLOUD_NAME,
  API_KEY: env.API_KEY,
  API_SECRET: env.API_SECRET
};

module.exports = config;
