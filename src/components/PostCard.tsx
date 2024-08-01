import { IBlogPost } from "@/model/BlogPost";
import strings from "@/strings";
import { Box, Button, Paper, Typography, colors } from "@mui/material";
import { FC } from "react";
import Link from "./Link";

const cutString = (text: string) => {
  const totalLength = 300;

  if (text.length < totalLength) {
    return text;
  }

  return text.substring(0, totalLength - 3) + "...";
};

type PostCardProps = {
  post: IBlogPost;
};

const PostCard: FC<PostCardProps> = ({ post }) => {
  return (
    <Paper
      sx={{
        bgcolor: colors.grey[700],
        p: 2,
        flex: 1,
      }}
      elevation={4}
    >
      <Typography variant="h5">{post.title}</Typography>
      <Typography variant="body2" color={colors.grey[500]}>
        {post.date.toLocaleDateString("en-US", {
          year: "numeric",
          day: "numeric",
          month: "long",
        })}
      </Typography>
      <Typography variant="body1">{cutString(post.description)}</Typography>
      <Box sx={{mt: 2}}>
        <Link
          href={`/post/${post.slug}`}
          sx={{
            textDecoration: "none",
            color: colors.grey[300],
            border: 1,
            borderRadius: 1,
            borderColor: colors.grey[300],
            p: 0.75,
            ":hover": {
              backgroundColor: colors.grey[600],
              borderColor: colors.grey[200],
              color: colors.grey[200],
            },
          }}
        >
          {strings.read_more}
        </Link>
      </Box>
    </Paper>
  );
};

export default PostCard;
