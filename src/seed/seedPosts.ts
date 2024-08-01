import initializeMongoose from "@/lib/initializeMongoose";
import BlogPost, { IBlogPost } from "@/model/BlogPost";
import strings from "@/strings";

const posts: IBlogPost[] = [{
    title: "Test Post 1",
    slug: "test-post-1",
    author: "zach@zachbaker.dev",
    description: "Testing post #1",
    date: new Date("2024-10-15"),
    markdown: `# HERE IT IS\n${strings.lorem_ipsum}`
}, {
    title: "Test Post 2",
    slug: "test-post-2",
    author: "zach@zachbaker.dev",
    description: "Testing post #2",
    date: new Date("2024-10-15"),
    markdown: `# HERE IT IS\n${strings.lorem_ipsum}`
}, {
    title: "Test Post 3",
    slug: "test-post-3",
    author: "zach@zachbaker.dev",
    description: "Testing post #3",
    date: new Date("2024-10-15"),
    markdown: `# HERE IT IS\n${strings.lorem_ipsum}`
}, {
    title: "Test Post 4",
    slug: "test-post-4",
    author: "zach@zachbaker.dev",
    description: "Testing post #4",
    date: new Date("2024-10-15"),
    markdown: `# HERE IT IS\n${strings.lorem_ipsum}`
}]; 

const seedPosts = async () => {
    await initializeMongoose();

    for (const post of posts) {
        const newPost = await BlogPost.create(post);
        newPost.save();
    }
}

export default seedPosts;