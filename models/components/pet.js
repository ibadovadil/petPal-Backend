import Joi from "joi";
import mongoose, { Schema } from "mongoose";

const petSchema = Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    availableDate: { type: Date, required: true },
    breed: { type: String, required: true },
    color: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: "PetCategory" },
    gender: { type: String, required: true },
    weight: { type: Number, required: true },
    puppyId: { type: Number, required: true },
    dateOfBirth: { type: Date, required: true },
    coverImage: { type: String, required: true },
    images: { type: [String] },
    isSold: { type: Boolean, required: true, default: false }
}, { timestamps: true });

export const petValidation = (pet) => {
    const schema = new Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number().required(),
        availableDate: Joi.date().required(),
        breed: Joi.string().required(),
        color: Joi.string().required(),
        gender: Joi.string().required(),
        weight: Joi.number().required(),
        puppyId: Joi.number().required(),
        dateOfBirth: Joi.date().required(),
        coverImage: Joi.string().required(),
        images: Joi.array(),
        isSold: Joi.boolean().required()
    });
    return schema.validate(pet);
}

export const Pet = mongoose.model("Pet", petSchema);