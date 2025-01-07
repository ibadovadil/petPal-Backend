import Joi from "joi";
import { Schema } from "mongoose";

const articlesSection  = Schema ({
    title: {
        type: String,
        required: true
    },
    subTitle: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const articlesSectionValidation = (articlesSection) => {
    const schema = new Joi.object({
        title: Joi.string().required(),
        subTitle: Joi.string().required()
    });
    return schema.validate(articlesSection);
}

export const ArticlesSection = mongoose.model('ArticlesSection', articlesSection);