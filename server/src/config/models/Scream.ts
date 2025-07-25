import { Schema, model, Document } from 'mongoose';

// Define an interface for the Scream document
interface IScream extends Document {
    text: string;
    createdAt: Date;
    shareCount: Number;
}

// Define the schema for the Scream document
const ScreamSchema = new Schema<IScream>(
    {
        text: {
            type: String,
            required: true,
            trim: true,
        },
        shareCount: {
            type: Number,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
        toJSON: { getters: true },
        toObject: { getters: true },
    }
);

const Scream = model<IScream>('Scream', ScreamSchema);

export default Scream;