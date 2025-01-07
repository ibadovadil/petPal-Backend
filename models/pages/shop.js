import { Schema } from "mongoose"

const shopSchema = Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, { timestamps: true });
