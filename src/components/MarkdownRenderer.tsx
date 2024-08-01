import { Typography } from "@mui/material";
import Link from "./Link";
import { FC } from "react";
import ReactMarkdown from 'markdown-to-jsx';

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "h4",
        component: "h1",
      },
    },
    h2: {
      component: Typography,
      props: { gutterBottom: true, variant: "h6", component: "h2" },
    },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: "subtitle1" },
    },
    h4: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "caption",
        paragraph: true,
      },
    },
    p: {
      component: Typography,
      props: { paragraph: true },
    },
    a: { component: Link },
  },
};

const MarkdownRenderer: FC<{children: string}> = ({children}) => {
    return <ReactMarkdown options={options}>{children}</ReactMarkdown>
}

export default MarkdownRenderer;