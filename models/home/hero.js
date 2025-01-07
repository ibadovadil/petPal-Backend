import Joi from "joi";
import { Schema } from "mongoose";


const heroSchema = Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    poster: {
        type: String,
        required: true
    },
    gif: {
        type: String,
    },
    images: [{
        type: String
    }]
},{ timestamps: true });

export const heroValidation = (hero) => {
    const schema = new Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        poster: Joi.string().required(),
        gif: Joi.string(),
        images: Joi.array()
    });
    return schema.validate(hero);
}

export default Hero = mongoose.model("Hero", heroSchema);