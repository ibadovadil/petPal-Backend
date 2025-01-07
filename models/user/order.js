import Joi from "joi";
import mongoose, { Schema } from "mongoose";

const orderSchema = Schema({
    orderId: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    products: [{
        product: { type: Schema.Types.ObjectId, ref: 'Product' },
        quantity: Number
    }],
    totalPrice: Number,
    status: {
        type: String,
        enum: ['pending', 'completed', 'cancelled'],
        default: 'pending'
    },
}, { timestamps: true });

export const orderValidation = (order) => {
    const schema = new Joi.object({
        orderId: Joi.string().required(),
        user: Joi.string().required(),
        products: Joi.array().required(),
        totalPrice: Joi.number().required(),
        status: Joi.string().required()
    });
    return schema.validate(order);
}

export const Order = mongoose.model("Order", orderSchema);