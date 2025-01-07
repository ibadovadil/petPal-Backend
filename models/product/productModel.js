import Joi from "joi";
import mongoose, { Schema } from "mongoose";

const productSchema = Schema({
    name: String,
    description: String,
    price: Number,
    stock: Number,
    coverImage: String,
    images: [String],
    sku: String,
    size: String,
    tags: [String],
    cardImage: String,
    discount: Number,
    bankImages: [String],
    productReviews: [{ type: Schema.Types.ObjectId, ref: "rewiews" }],
    subCategory: { type: Schema.Types.ObjectId, ref: "subCategory" },
    active: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

export const productValidation = (product) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number().required(),
        stock: Joi.number().required(),
        coverImage: Joi.string().required(),
        discount: Joi.number().required(),
        images: Joi.array().items(Joi.string()).required(),
        sku: Joi.string().required(),
        size: Joi.string().required(),
        tags: Joi.array().items(Joi.string()).required(),
        cardImage: Joi.string().required(),
        bankImages: Joi.array().items(Joi.string()).required(),
        productReviews: Joi.array().items(Joi.string()).required(),
        subCategory: Joi.string().required(),
        active: Joi.boolean()
    });
    return schema.validate(product);
}

export const Product = mongoose.model("Product", productSchema);