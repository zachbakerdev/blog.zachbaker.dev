import {FC, PropsWithChildren} from "react";
import {Container} from "@mui/material";
import {Box} from "@mui/system";
import NavBar from "@/components/NavBar";

const PageWrapper: FC<PropsWithChildren> = ({children}) => {
    return <Box>
        <NavBar/>
        <Container>
            {children}
        </Container>
    </Box>;
}

export default PageWrapper;
