import { model, Schema } from "mongoose";

export const HistorySchema = new Schema(
    {
        id: {type: String},
        userId: {type: String, required: true},
        apartmentName: {type: String, required: true},
        apartmentImage: {type: String, required: true},
        movingDate: {type: Date, required: true},
        apply: {type: String, default: "Processing"}
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

export const HistoryModel = model('history', HistorySchema);