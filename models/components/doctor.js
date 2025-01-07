import Joi from "joi";
import mongoose, { Schema } from "mongoose";


const doctorSchema = Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    image: { type: String, required: true },
    experience: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    socialMedia: {
        instagram: { type: String },
        facebook: { type: String },
        twitter: { type: String },
        whatsapp: { type: String },
        youtube: { type: String }
    },
    showOnHomePage: { type: Boolean, default: false }
}, { timestamps: true });

export const doctorValidation = (doctor) => {
    const Schema = new Joi.object({
        name: Joi.string().required(),
        position: Joi.string().required(),
        image: Joi.string().required(),
        experience: Joi.string().required(),
        phone: Joi.string().required(),
        email: Joi.string().required(),
        address: Joi.string().required(),
        showOnHomePage: Joi.boolean(),
        socialMedia: Joi.object({
            instagram: Joi.string().uri(),
            facebook: Joi.string().uri(),
            twitter: Joi.string().uri(),
            whatsapp: Joi.string().uri(),
            youtube: Joi.string().uri()
        })
    });
    return Schema.validate(doctor);
};


export const Doctor = mongoose.model('Doctor', doctorSchema);