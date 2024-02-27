import { model, Schema } from "mongoose";

export const ApartmentSchema = new Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        price: {type: Number, required: true},
        imageUrl: {type: String, required: true},
        city: {type: String, required: true},
        country: {type: String, required: true},
        description: {type: String, required: true},
        available: {type: Boolean, required: true},
        rules: {type: [String], required: true},
        email: {type: String, required: true},
        teleNumber: {type: String, required: true},
    },
    {
        toJSON: {
            virtuals: true,
        },
        toObject: {
            virtuals: true,
        }
    }
);

export const ApartmentModel = model('apartment', ApartmentSchema);