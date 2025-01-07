import Joi from "joi";
import mongoose, { Schema } from "mongoose";

const generalSettingsSchema = Schema({
    logoDark: String,
    logoLight: String,
    favicon: String,
    adress: String,
    phone: [String],
    email: [String],
    instagramUrl: String,
    facebookUrl: String,
    twitterUrl: String,
    whatsappUrl: String,
    youtubeUrl: String,
    titleIcon: String,
}, { timestamps: true })

export const generalSettingsValidation = (generalSettings) => {
    const Schema = new Joi.object({
        logoDark: Joi.string().required(),
        logoLight: Joi.string().required(),
        favicon: Joi.string().required(),
        adress: Joi.string().required(),
        phone: Joi.array().items(Joi.string()).required(),
        email: Joi.array().items(Joi.string()).required(),
        instagramUrl: Joi.string().uri().required(),
        facebookUrl: Joi.string().uri().required(),
        twitterUrl: Joi.string().uri().required(),
        whatsappUrl: Joi.string().uri().required(),
        youtubeUrl: Joi.string().uri().required(),
        titleIcon: Joi.string()
    });
    return Schema.validate(generalSettings);
};

export const generalSettings = mongoose.model("generalSettings", generalSettingsSchema);
