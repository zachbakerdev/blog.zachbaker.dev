'use client';
import { Roboto } from "next/font/google";
import {createTheme} from "@mui/material/styles";
import { colors } from "@mui/material";

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    palette: {
        background: {
            default: colors.grey[900]
        }
    }
});

export default theme;
