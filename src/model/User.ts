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
        type: String
    },
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    avatar: {
        type: String
    }
}, {
    timestamps: true
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;