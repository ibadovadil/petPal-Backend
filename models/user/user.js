import Joi from "joi";
import mongoose, { Schema } from "mongoose";


const userSchema = new Schema(
    {
      name: { type: String, required: true },
      surname: { type: String, required: true },
      userName: { type: String, required: true, unique: true },
      email: { type: String, required: true },
      password: { type: String, required: true },
      phone: { type: String, required: true },
      role: {
        type: String,
        default: 'user',
        enum: ["user", "admin", "superadmin", "moderator"],
      },
      comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
      blogs: [{ type: Schema.Types.ObjectId, ref: "Blog" }],
    },
    { timestamps: true }
  );

export const userValidation = (user) => {
    const Schema = new Joi.object
        ({
            name: Joi.string().required(),
            surname: Joi.string().required(),
            userName: Joi.string().required(),
            email: Joi.string().required(),
            password: Joi.string().required(),
            phone: Joi.string().required(),
            role: Joi.string().required(),
        });
    return Schema.validate(user);
}


export const User = mongoose.model("User", userSchema);