"use client";
import Link from "@/components/Link";
import PageWrapper from "@/components/PageWrapper";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  colors,
} from "@mui/material";
import { FC, FormEventHandler } from "react";

const textFieldSx = {
  color: "white",
  "& label": { color: colors.grey[500] },
  "&:hover label": { color: colors.grey[200] },
  "& label.Mui-focused": { color: colors.grey[200] },
  "& .MuiInput-underline:after": { borderBottomColor: "white" },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: colors.grey[500],
    },
    "&:hover fieldset": {
      borderColor: colors.grey[200],
    },
    "&:Mui-focused fieldset": {
      borderColor: colors.grey[200],
    },
  },
};

const Page: FC = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <PageWrapper>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            sx={textFieldSx}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            sx={textFieldSx}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox sx={{color: colors.grey[500], ':hover': {color: colors.grey[200]}}} value="remember" color="default" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link
                href="#"
                variant="body2"
                sx={{ color: "white", textDecorationColor: "white" }}
              >
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="#"
                variant="body2"
                sx={{ color: "white", textDecorationColor: "white" }}
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default Page;
