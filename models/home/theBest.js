import Joi from "joi";
import mongoose, { Schema } from "mongoose";


const theBestSchema = Schema({
    subTitle: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    card: [{
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        }
    }]
}, { timestamps: true });

export const theBestValidation = (theBest) => {
    const schema = new Joi.object({
        subTitle: Joi.string().required(),
        title: Joi.string().required(),
        description: Joi.string().required(),
        image: Joi.string().required(),
        card: Joi.array().items(Joi.object({
            title: Joi.string().required(),
            description: Joi.string().required(),
            icon: Joi.string().required()
        }))
    })
    return schema.validate(theBest);
}

export const theBest = mongoose.model("TheBest", theBestSchema);