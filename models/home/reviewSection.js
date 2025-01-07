import Joi from "joi";

const { Schema, default: mongoose } = require("mongoose");

const reviewSectionSchema = Schema({
    image: {
        type: String,
        required: true
    }
})

export const reviewSectionValidation = (review) => {
    const schema = Joi.object({
        image: Joi.string().required()
    });
    return schema.validate(review);
}

export const ReviewSection = mongoose.model("ReviewSection", reviewSectionSchema);