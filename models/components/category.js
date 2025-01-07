import Joi from "joi";
import mongoose, { Schema } from "mongoose";

const categorySchema = Schema({
    title: { type: String, required: true },
    blogs: [{ type: Schema.Types.ObjectId, ref: "Blog" }],
}, { timestamps: true });

export const categoryValidation = (category) => {
    const schema = new Joi.object({
        title: Joi.string().required(),
        blogs: Joi.array(),
    });
    return schema.validate(category);
}
export const Category = mongoose.model("Category", categorySchema);