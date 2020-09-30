import React from "react";

// Navigation / Routes
import { Link } from "react-router-dom";

//General Components
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

//Text Field Component
import TextField from '@material-ui/core/TextField';

//Semantic UI Components
import { Image } from 'semantic-ui-react';

//Controls components based on maxWidth
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 375,
  },

  fieldStyles: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '90ch',
    },
  },
}));

export default function Login(props) {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Box mt={12}>
        <Typography variant="h3" gutterBottom align="center">
          Login
        </Typography>

        <Box mt={8}>
          <Image src="/docs/other/login-seal.png" size="small" centered />
        </Box>
      </Box>

      <Box mt={5}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            fullWidth
            disabled
            id="outlined-disabled"
            label="Email"
            defaultValue="lighthouse@gmail.com"
            variant="outlined"
          />
        </form>
      </Box>

      <Box mt={5}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            fullWidth
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />
        </form>
      </Box>

      <Box mt={5} mb={5} display="flex" justifyContent="center">
        <Button variant="contained" color="primary" size="large">
          <Link className="link" to="/mammalprofile-postlogin">
            Login
          </Link>
        </Button>
      </Box>

    </Container>
  );
}