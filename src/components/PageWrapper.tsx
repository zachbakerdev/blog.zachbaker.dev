import {FC, PropsWithChildren} from "react";
import {Container} from "@mui/material";
import {Box} from "@mui/system";
import NavBar from "@/components/NavBar";

const PageWrapper: FC<PropsWithChildren> = ({children}) => {
    return <Box>
        <NavBar/>
        <Container sx={{bgcolor: 'tomato', height: '100vh'}}>
            {children}
        </Container>
    </Box>;
}

export default PageWrapper;
