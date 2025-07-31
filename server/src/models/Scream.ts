import { Schema, model, Document } from 'mongoose';

export interface IScream extends Document {
    content: string;
    createdAt: Date;
    // echoCount: Number;
}

const ScreamSchema = new Schema<IScream>({
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    // echoCount: { type: Number, default: idk yet },
});

export default model<IScream>('Scream', ScreamSchema);