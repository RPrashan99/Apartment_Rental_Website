import { model, Schema } from "mongoose";

export const UserSchema = new Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        isAdmin: {type: Boolean, default: false},
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

export const UserModel = model('user', UserSchema);