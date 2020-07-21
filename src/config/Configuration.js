import { config } from 'dotenv';
import Joi from 'joi';


// define validation for all the env vars
const { value: envVars } = Joi.validate(process.env);
config();

// const envVarsSchema = Joi.object({
//   NODE_ENV: Joi.string()
//     .default('development'),
//   PORT: Joi.number()
//     .default(9001),
// }).unknown()
//   .required();

// const { value: envVars } = Joi.validate(process.env, envVarsSchema);

const configurations = Object.freeze({
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  serviceURL: envVars.SERVICE_URL,
});
console.log('====config setup ======', configurations);

export default configurations;
