import Joi from "joi";
import { Schema } from "mongoose";

const ReservationHomeSchema = Schema({
    title: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    petType: {
        type: String,
        required: true
    },
    interestIn: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const reservationValidation = (reservation) => {
    const schema = new Joi.object({
        title: Joi.string().required(),
        name: Joi.string().required(),
        petType: Joi.string().required(),
        interestIn: Joi.string().required(),
        date: Joi.string().required(),
        time: Joi.string().required(),
        phone: Joi.string().required()
    });
    return schema.validate(reservation);
}

export const Reservation = mongoose.model('ReservationHome', ReservationHomeSchema);