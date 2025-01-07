import Joi from "joi";
import { Schema } from "mongoose";

const prioritySchema = Schema({
    subtitle: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    card: [{
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }]
}, { timestamps: true });

export const priorityValidation = (priority) => {
    const schema = new Joi.object({
        subtitle: Joi.string().required(),
        title: Joi.string().required(),
        description: Joi.string().required(),
        image: Joi.string().required(),
        card: Joi.array().items(Joi.object({
            title: Joi.string().required(),
            description: Joi.string().required()
        }))
    })

    return schema.validate(priority);
}
export const Priority = mongoose.model("Priority", prioritySchema);