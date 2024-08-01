import {FC} from "react";
import {AppBar, CssBaseline, SxProps, Theme, Toolbar, Typography, useTheme} from "@mui/material";
import {Box} from "@mui/system";
import Link from "@/components/Link";

const NavBar: FC = () => {
    const linkStyle = {ml: 3, color: 'white', textDecoration: 'none'};

    return <AppBar sx={{bgcolor: 'black'}}>
        <CssBaseline/>
        <Toolbar>
            <Typography variant="h4">
                Navbar
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
