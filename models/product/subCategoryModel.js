import Joi from "joi";
import mongoose, { Schema } from "mongoose";

const subCategorySchema = Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: "Product"
    }]
}, { timestamps: true });

export const subCategoryValidation = (subCategory) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        category: Joi.string().required(),
        products: Joi.array().items(Joi.string()).required()
    });
    return schema.validate(subCategory);
};
export const SubCategory = mongoose.model("SubCategory", subCategorySchema);