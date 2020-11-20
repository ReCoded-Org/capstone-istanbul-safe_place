import Joi from "joi";

export function getErrorClass(error) {
  if (!error) {
    return "";
  }

  return "inputError";
}

export const validationSchemaObject = {
  email: Joi.string().required().email({ tlds: {} }).messages({
    "string.empty": `Please provide your email`,
    "string.email": `Please provide a valid email`,
  }),
  password: Joi.string().required().min(8).max(64).strict().messages({
    "string.empty": `Please provide a password`,
  }),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .strict()
    .messages({
      "any.only": "Those passwords didn't match",
    }),
  newPassword: Joi.string().allow("").min(8).max(64).messages({
    "string.empty": `Please provide a new password`,
  }),
  confirmNewPassword: Joi.string().valid(Joi.ref("newPassword")).messages({
    "any.only": "Those passwords didn't match",
  }),
  stringRequired: Joi.string().required(),
  anyOptional: Joi.any().optional(),
};
