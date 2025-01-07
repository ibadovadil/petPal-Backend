import Joi from "joi";
import mongoose, { Schema } from "mongoose";


const wishlistSchema = Schema({
    wishlistId: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
}, { timestamps: true });

export const wishlistValidation = (wishlist) => {
    const schema = Joi.object({
        wishlistId: Joi.string().required(),
        user: Joi.string().required(),
        products: Joi.array().items(Joi.string()).required()
    });
    return schema.validate(wishlist);
}

export const Wishlist = mongoose.model('Wishlist', wishlistSchema);