import mongoose, { Schema } from "mongoose";
import Joi from "joi";


const reservationSchema = new Schema(
  {
    title: { type: String, required: true },
    subTitle: { type: String, required: true },
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: String, required: true },
    species: { type: String, required: true },
    breed: { type: String, required: true },
    appointment: { type: String, required: true },
    specialNote: { type: String, required: true },
  },
  { timestamps: true }
);

export const reservationValidation = (reservation) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    subTitle: Joi.string().required(),
    fullname: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    date: Joi.string().required(),
    species: Joi.string().required(),
    breed: Joi.string().required(),
    appointment: Joi.string().required(),
    specialNote: Joi.string().required(),
  });
  return schema.validate(reservation);
};

export const Reservation = mongoose.model("Reservation", reservationSchema);
