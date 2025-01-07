import Joi from "joi";
import { Schema } from "mongoose";

const bannerSchema = Schema({
    text: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
},{ timestamps: true });

export const bannerValidation = (banner) => {
    const schema = new Joi.object({
        text: Joi.string().required(),
        icon: Joi.string().required()
    })
    return schema.validate(banner);
}

export const Banner = mongoose.model("Banner", bannerSchema);