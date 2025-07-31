import { ObjectId } from 'mongoose'

export interface Scream {
    id: ObjectId;
    content: string;
    createdAt: string;
}