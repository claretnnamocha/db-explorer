import dotenv from "dotenv";
import Joi from "joi";

dotenv.config();

const schema = Joi.object({
  NODE_ENV: Joi.string()
    .valid("development", "production", "test", "provision")
    .default("development"),
  PORT: Joi.number().required(),
})
  .unknown()
  .required();

const { error, value: _env } = schema.validate(process.env);

if (error) throw error;

export const env = _env.NODE_ENV;
export const port = _env.PORT;
