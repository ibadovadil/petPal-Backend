import Joi from "joi";
import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema(
    {
        title: { type: String, required: true },
        firstDescription: { type: String, required: true },
        secondDescription: { type: String },
        coloredDescription: { type: String },
        secondTitle: { type: String },
        headLine: { type: String },
        headDescription: { type: String },
        secondHeadLine: { type: String },
        secondHeadDescription: { type: String },
        video: { type: String },
        tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
        author: { type: Schema.Types.ObjectId, ref: "User" },
        category: { type: Schema.Types.ObjectId, ref: "Category" },
        comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    },
    { timestamps: true }
);

export const blogValidation = (blog) => {
    const schema = new Joi.object({
        title: Joi.string().required(),
        firstDescription: Joi.string().required(),
        secondDescription: Joi.string(),
        coloredDescription: Joi.string(),
        secondTitle: Joi.string(),
        headLine: Joi.string(),
        headDescription: Joi.string(),
        secondHeadLine: Joi.string(),
        secondHeadDescription: Joi.string(),
        video: Joi.string(),
        tags: Joi.array(),
        author: Joi.string().required(),
        category: Joi.string(),
        comments: Joi.array(),
    });
    return schema.validate(blog);
};

export const Blog = mongoose.model("Blog", blogSchema);

