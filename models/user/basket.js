import Joi from "joi";
import mongoose, { Schema } from "mongoose";

const basketSchema = Schema({
    basketId: String,
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    products: [{
        productId: {
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
    }],
    totalPrice: Number
}, { timestamps: true, });

export const basketValidation =(basket)=>{
    const schema = Joi.object({
        userId: Joi.string().required(),
        products: Joi.array().items(Joi.object({
            productId: Joi.string().required(),
            quantity: Joi.number().required(),
        })).required(),
        totalPrice: Joi.number().required(),
    });
    return schema.validate(basket);
}

export const Basket = mongoose.model("Basket", basketSchema);