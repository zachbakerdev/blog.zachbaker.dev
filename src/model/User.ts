import mongoose from "mongoose";

export interface IUser {
    display_name: string;
    username: string;
    email: string;
    password: string;
    avatar: string;
    createdAt: string;
    updatedAt: string;
}

const userSchema = new mongoose.Schema({
    display_name: {
        type: String,
        required: true,
        index: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    }
}, {
    timestamps: true
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;