import Joi from "joi";
import mongoose, { Schema } from "mongoose";

const servicesSchema = Schema({
    title: {
        type: String,
        required: true
    },
    subTitle: {
        type: String,
        required: true
    },
    images: [{
        type: String,
    }],
    service: [{
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        }
    }]
},{ timestamps: true });

export const servicesValidation = (services) =>{
    const schema = new Joi.object({
        title:Joi.string().required(),
        subTitle:Joi.string().required(),
        images:Joi.array(),
        service:Joi.array().items(Joi.object({
            title:Joi.string().required(),
            description:Joi.string().required(),
            icon:Joi.string().required()
        }))
    })
    return schema.validate(services);
} 

export const Services = mongoose.model("Services", servicesSchema);