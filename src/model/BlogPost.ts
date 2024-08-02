import mongoose from "mongoose";

export interface IBlogPost {
    title: string;
    slug: string;
    author: string;
    description: string;
    markdown: string;
    date: Date;
    createdAt?: string;
    updatedAt?: string;
}

const blogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        index: { unique: true }
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        index: { unique: true }
    },
    author: {
        type: String,
        required: true,
        index: true
    },
    description: {
        type: String,
        required: true
    },
    markdown: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        index: true
    }
}, {
    timestamps: true
});

const BlogPost = mongoose.models.BlogPost || mongoose.model("BlogPost", blogPostSchema);

export type BlogPostDocument = mongoose.Document<mongoose.Types.ObjectId, {}, IBlogPost> & IBlogPost;
export default BlogPost;
