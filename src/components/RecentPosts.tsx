import initializeMongoose from "@/lib/initializeMongoose";
import BlogPost, { IBlogPost } from "@/model/BlogPost";
import { Box, Typography } from "@mui/material";
import { FC } from "react";
import PostCard from "./PostCard";
import strings from "@/strings";

const RecentPosts: FC = async () => {
    await initializeMongoose();
    
    const posts: IBlogPost[] = await BlogPost.find({}, {}, { sort: { date: -1 }, limit: 3 }).exec();
    
    return <>
        <Typography variant="h4" sx={{
            mt: 4, mb:2
        }}>{strings.recent_posts}</Typography>
        <Box sx={{
            display: 'flex',
            flexDirection: { xs: "column", md: "row"},
            justifyContent: 'space-between',
            gap: 4
        }}>
            {posts.map(post => (
                <PostCard key={post.slug} post={post} />
            ))}
        </Box>
    </>
}

export default RecentPosts;