import Joi from "joi";
import { Schema } from "mongoose";
//? userImages 

const knowMoreUs = Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    text: { type: String, required: true },
    experience: { type: String, required: true },
    videoPoster: { type: String, required: true },
    videoUrl: { type: String, required: true },
    videoText: { type: String, required: true },
    doctorName: { type: String, required: true },
},{ timestamps: true });

export const knowMoreUsValidation = (knowMoreUs) => {
    const schema = new Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        text: Joi.string().required(),
        experience: Joi.string().required(),
        videoPoster: Joi.string().required(),
        videoUrl: Joi.string().required(),
        videoText: Joi.string().required(),
        doctorName: Joi.string().required(),
    });
    return schema.validate(knowMoreUs);
};

export const KnowMoreUs = mongoose.model("KnowMoreUs", knowMoreUs);