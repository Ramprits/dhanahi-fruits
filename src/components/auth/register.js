import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {
  clearRegisterError,
  registerUser,
} from "../../redux/reducers/user/user.actions";
import CustomSnackbar from "../error/customSnackbar";

export default function Register(props) {
  const { register, handleSubmit, errors } = useForm();
  const { loading, error } = useSelector((state) => state.registerUser);
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(registerUser(data));
  };

  const content = {
    brand: { image: "mui-assets/img/logo-pied-piper-icon.png", width: 40 },
    header: "Create a new account",
    terms: "I agree to the terms of use and privacy policy.",
    "01_primary-action": "Sign up",
    "01_secondary-action": "Already have an account? Sign in",
    "01_first-name": "First Name *",
    "01_last-name": "Last Name *",
    "01_email": "Email Address *",
    "01_password": "Password *",
    ...props.content,
  };

  let brand;

  if (content.brand.image) {
    brand = (
      <img src={content.brand.image} alt="" width={content.brand.width} />
    );
  } else {
    brand = content.brand.text || "";
  }

  const CustomLink = React.useMemo(
    () =>
      React.forwardRef((linkProps, ref) => (
        <RouterLink ref={ref} to={props.to} {...linkProps} />
      )),
    [props.to]
  );

  const handleClose = () => {
    dispatch(clearRegisterError());
  };

  return (
    <section>
      <Container maxWidth="xs">
        <Box pt={8} pb={10}>
          <Box mb={3} textAlign="center">
            <Link href="#" variant="h4" color="inherit" underline="none">
              {brand}
            </Link>
            <Typography variant="h5" component="h2">
              {content["header"]}
            </Typography>
          </Box>
          <Box>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    autoComplete="first_name"
                    error={!!errors.first_name}
                    name="first_name"
                    inputRef={register({ required: true })}
                    label={content["01_first-name"]}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    error={!!errors.last_name}
                    name="last_name"
                    inputRef={register({ required: true })}
                    label={content["01_last-name"]}
                    autoComplete="last_name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    type="email"
                    error={!!errors.email}
                    name="email"
                    inputRef={register({ required: true })}
                    label={content["01_email"]}
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    error={!!errors.password}
                    name="password"
                    inputRef={register({ required: true })}
                    label={content["01_password"]}
                    type="password"
                    autoComplete="password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox name="terms" value="1" color="primary" />
                    }
                    label={content["terms"]}
                  />
                </Grid>
              </Grid>
              <Box my={2}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={loading}
                >
                  {content["01_primary-action"]}
                </Button>
              </Box>
              <Box textAlign="right">
                <Link component={CustomLink} to="/login" variant="body2">
                  {content["01_secondary-action"]}
                </Link>
              </Box>
            </form>
          </Box>
        </Box>
        <CustomSnackbar error={error} handleClose={handleClose} />
      </Container>
    </section>
  );
}
