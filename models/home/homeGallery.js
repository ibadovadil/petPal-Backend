import Joi from "joi";
import { Schema } from "mongoose";

const homeGalerrySchema = Schema({
    image: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

export const homeGalleryValidation = (homeGallery) => {
    const Schema = new Joi.object({
        image: Joi.string().required(),
        isActive: Joi.boolean()
    });

    return Schema.validate(homeGallery);
}

export const HomeGallery = mongoose.model('HomeGallery', homeGalerrySchema);