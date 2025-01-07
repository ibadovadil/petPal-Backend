import Joi from "joi";
import mongoose, { Schema } from "mongoose";

const petPageSchema = Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const petPageValidation = (petPage) => {
    const schema = new Joi.object({
        title: Joi.string().required(),
        image: Joi.string().required()
    });
    return schema.validate(petPage);
}

export const PetPage = mongoose.model("PetPage", petPageSchema);