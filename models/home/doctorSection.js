import Joi from "joi";
import { Schema } from "mongoose";

const doctorSchema = Schema ({
    title: String,
    subtitle: String,
    icon : String,
}, { timestamps: true });


export const doctorValidation = (doctor) => {
    const schema = new Joi.object({
        title: Joi.string().required(),
        subtitle: Joi.string().required(),
        icon: Joi.string().required(),
    });
    return schema.validate(doctor);
}
export const Doctor = mongoose.model('Doctor', doctorSchema);