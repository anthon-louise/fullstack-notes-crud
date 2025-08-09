const Joi = require('joi')

const noteSchema = Joi.object({
    title: Joi.string().min(3).max(20).required(),
    content: Joi.string().min(3).max(20).required()
})

const idSchema = Joi.object({
    id: Joi.number().integer().positive().required()
})

module.exports = {
    noteSchema,
    idSchema
}