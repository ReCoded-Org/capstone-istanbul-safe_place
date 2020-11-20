import Joi from "joi";

export function getErrorClass(error) {
  if (!error) {
    return undefined;
  }

  return "inputError";
}

export const validationSchemaObject = {
  email: Joi.string().required().email({ tlds: {} }).messages({
    "string.empty": `Please provide your email`,
    "string.email": `Please provide a valid email`,
  }),
  stringRequired: Joi.string().required(),
  anyOptional: Joi.any().optional(),
};
