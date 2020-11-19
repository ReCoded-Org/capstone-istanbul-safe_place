import Joi from "joi";

export function getErrorClass(error) {
  if (!error) return "";

  return "inputError";
}

export const formSchemaObject = {
  email: Joi.string().required().email({ tlds: {} }).messages({
    "string.empty": `Please provide your email`,
    "string.email": `Please provide a valid email`,
  }),
  stringRequired: Joi.string().required(),
  anyOptional: Joi.any().optional(),
};
