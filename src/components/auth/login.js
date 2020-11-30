import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  clearLoginError,
  loginUser,
} from "../../redux/reducers/user/user.actions";
import { useStyles } from "./login.style";
import { Snackbar } from "@material-ui/core";
import CustomSnackbar from "../error/customSnackbar";

export default function Login(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.loginUser);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };

  const CustomLink = React.useMemo(
    () =>
      React.forwardRef((linkProps, ref) => (
        <RouterLink ref={ref} to={props.to} {...linkProps} />
      )),
    [props.to]
  );

  const content = {
    brand: { image: "mui-assets/img/logo-pied-piper-icon.png", width: 40 },
    "02_header": "Sign in",
    "02_primary-action": "Sign in",
    "02_secondary-action": "Don't have an account?",
    "02_tertiary-action": "Forgot password?",
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
  const handleClose = () => {
    dispatch(clearLoginError());
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
              {content["02_header"]}
            </Typography>
          </Box>
          <Box>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    error={!!errors.identifier}
                    required
                    fullWidth
                    name="identifier"
                    inputRef={register({ required: true })}
                    label="Email address"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    error={!!errors.password}
                    required
                    fullWidth
                    name="password"
                    id="password"
                    inputRef={register({ required: true })}
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                  />
                </Grid>
              </Grid>
              <Box my={2}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  {content["02_primary-action"]}
                </Button>
              </Box>
              <Grid container spacing={2} className={classes.actions}>
                <Grid item xs={12} sm={6}>
                  <Link
                    href="#"
                    variant="body2"
                    component={CustomLink}
                    to="/register"
                  >
                    {content["02_secondary-action"]}
                  </Link>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.tertiaryAction}>
                  <Link href="#" variant="body2">
                    {content["02_tertiary-action"]}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
        <CustomSnackbar error={error} handleClose={handleClose} />
      </Container>
    </section>
  );
}
