import Joi from "joi";
import mongoose, { Schema } from "mongoose";
const commentSchema = new Schema(
    {
      user: { type: Schema.Types.ObjectId, ref: "User", required: true },
      blog: { type: Schema.Types.ObjectId, ref: "Blog", required: true },
      comment: { type: String, required: true },
    },
    { timestamps: true }
  );

export const commentValidation = (comment) => {
    const schema = new Joi.object({
        user: Joi.string().required(),
        blog: Joi.string().required(),
        comment: Joi.string().required()
    });
    return schema.validate(comment);
}

export const Comment = mongoose.model('Comment', commentSchema);
