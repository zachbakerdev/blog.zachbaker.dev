import {FC} from "react";
import {AppBar, CssBaseline, Toolbar, Typography, colors} from "@mui/material";
import {Box} from "@mui/system";
import Link from "@/components/Link";
import strings from "@/strings";

const NavBar: FC = () => {
    const linkStyle = {ml: 3, color: 'white', textDecoration: 'none'};

    return <AppBar sx={{bgcolor: 'black', color: colors.grey[200]}} position="sticky">
        <CssBaseline/>
        <Toolbar>
            <Typography variant="h4">
                <Link href="/" sx={{textDecoration: "inherit", color: "inherit"}}>
                    {strings.navbar}
                </Link>
            </Typography>
            <Box sx={{ml: "auto"}}>
                <Link href="/" sx={linkStyle}>
                    Home
                </Link>
                <Link href="/login" sx={linkStyle}>
                    Login
                </Link>
                <Link href="/register" sx={linkStyle}>
                    Register
                </Link>
            </Box>
        </Toolbar>
    </AppBar>
}

export default NavBar;
