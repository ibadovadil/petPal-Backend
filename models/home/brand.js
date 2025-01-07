import Joi from "joi";
import { Schema } from "mongoose";


const brandSchema = Schema({
    image: String
}, { timestamps: true });

export const brandValidation = (brand) => {
    const schema = new Joi.object({
        image: Joi.string().required()
    });
    return schema.validate(brand);
}

export const Brand = mongoose.model('Brand', brandSchema);
