import PageWrapper from "@/components/PageWrapper";
import BlogPost from "@/model/BlogPost";
import User from "@/model/User";
import { Box, Typography } from "@mui/material";
import { FC } from "react";

type PageParams = {
    params: {
        slug: string;
    }
}

const Page: FC<PageParams> = async ({ params }) => {
    const post = await BlogPost.findOne({ slug: params.slug }).exec();
    const user = await User.findOne({ email: post.author }).exec();

    return <PageWrapper>
        <Typography variant="h2">{post.title}</Typography>
        <Box sx={{px: 4}}>
            <Typography variant="h6">By {user.display_name}</Typography>
            <Typography variant="body1">{post.date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric"})}</Typography>
        </Box>
        
    </PageWrapper>
}

export default Page;
