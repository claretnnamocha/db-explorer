import Joi from "joi";

export const listTableColumns = {
  table: Joi.string().required(),
};

export const createRecords = {
  table: Joi.string().required(),
  records: Joi.array().unique().required(),
};

export const readRecords = {
  table: Joi.string().required(),
  where: Joi.object().default({}),
};

export const updateRecords = {
  table: Joi.string().required(),
  where: Joi.object().required(),
  values: Joi.object().required(),
};

export const deleteRecords = {
  table: Joi.string().required(),
  where: Joi.object().required(),
};
