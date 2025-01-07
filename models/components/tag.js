import Joi from "joi";
import mongoose, { Schema } from "mongoose";

const tagSchema = Schema({
    title: { type: String, required: true },
    blogs: [{ type: Schema.Types.ObjectId, ref: "Blog" }],
}, { timestamps: true });

export const tagValidation = (tag) => {
    const schema = new Joi.object({
        title: Joi.string().required(),
        blogs: Joi.array(),
    });
    return schema.validate(tag);
}

export const Tag = mongoose.model("Tag", tagSchema);