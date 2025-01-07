import Joi from "joi";
import mongoose, { Schema } from "mongoose";

const petCategorySchema = Schema({
    title: { type: String, required: true },
    pets: [{ type: Schema.Types.ObjectId, ref: "Pet" }],
}, { timestamps: true });

export const petcategoryValidation = (Petcategory) => {
    const schema = new Joi.object({
        title: Joi.string().required(),
        blogs: Joi.array(),
    });
    return schema.validate(Petcategory);
}
export const Category = mongoose.model("PetCategory", petCategorySchema);