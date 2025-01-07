import Joi from "joi";
import mongoose, { Schema } from "mongoose";


const categorySchema = Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    subcategories: [{
        type: Schema.Types.ObjectId,
        ref: "SubCategory"
    }]
}, { timestamps: true });

export const categoryValidation = (category) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        subcategories: Joi.array().items(Joi.string())
    });
    return schema.validate(category);
};

export const Category = mongoose.model("Category", categorySchema);
