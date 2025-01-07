import Joi from "joi";
import mongoose, { Schema } from "mongoose";

const blogPageSchema = Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
}, { timestamps: true });

export const blogPageValidation = (blogPage) => {
    const Schema = new Joi.object({
        title: Joi.string().required(),
        image: Joi.string().required(),
    });
    return Schema.validate(blogPage);
};

export const BlogPage = mongoose.model('BlogPage', blogPageSchema);