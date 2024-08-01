import NLink from 'next/link';
import {Link as MLink, SxProps, Theme, TypographyOwnProps} from '@mui/material';
import {FC, PropsWithChildren} from "react";
import {UrlObject} from "node:url";

interface NextLinkProps extends PropsWithChildren {
    href: string | UrlObject;
    sx?: SxProps<Theme>;
    variant?: TypographyOwnProps["variant"];
}

const Link: FC<any> = ({href, variant, sx, children}) => {
    return <MLink href={href} variant={variant} sx={sx} component={NLink}>
        {children}
    </MLink>
}

export default Link;
