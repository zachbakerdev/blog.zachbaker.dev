import BlogPost from '@/model/BlogPost';
import User from '@/model/User';
import assert from 'assert';
import mongoose, { Mongoose } from 'mongoose';

const mongoUri = process.env.MONGO_URI;

assert(mongoUri, "missing env:MONGO_URI");

let status: "disconnected" | "connecting" | "connected" = "disconnected";
let mongoosePromise: Promise<Mongoose> | null = null;

const initializeMongoose = async (): Promise<void> => {
    if (status === "disconnected" && mongoosePromise === null) {
        mongoosePromise = mongoose.connect(mongoUri);
        status = "connecting";
        mongoosePromise.then(() => {
            User.ensureIndexes();
            BlogPost.ensureIndexes();
        }).catch(err => {
            process.exit(1);
        });
    }
    
    if (status === "connecting") {
        await mongoosePromise;
        status = "connected";
    }
}

export default initializeMongoose;
