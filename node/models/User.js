const Joi = require("joi");

const schema = {
    firstName: Joi.string()
        .min(3)
        .max(50)
        .required(),
    lastName: Joi.string()
        .min(3)
        .max(50)
        .required(),
    email: Joi.string()
        .min(2)
        .max(255)
        .required(),
    id: Joi.number()
        .required()
};

module.exports = Joi.object().keys(schema);