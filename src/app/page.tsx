import PageWrapper from "@/components/PageWrapper";
import RecentPosts from "@/components/RecentPosts";
import strings from "@/strings";
import { Typography } from "@mui/material";

export default function Home() {
  return (
      <PageWrapper>
        <Typography variant="h2">{strings.title}</Typography>
        <RecentPosts />
      </PageWrapper>
  );
}
