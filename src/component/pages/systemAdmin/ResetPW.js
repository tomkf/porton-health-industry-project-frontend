import React from "react";
import AuthContext from "../../../data/AuthContext"
import {  BrowserRouter as Router,  Route,  Link,  useHistory,  useLocation,} from "react-router-dom";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";


const useStyles = makeStyles((theme) => ({

  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export default function ResetPW() {
  const classes = useStyles();
  let history = useHistory();
  let location = useLocation();
  const authContext = React.useContext(AuthContext);

  let [username, setUsername] = React.useState("");
  const handleTextChange = (e) => {
    setUsername(e.target.value);
  };

  let [password2, setPassword2] = React.useState("");
  const handlePasswordChange2 = (e) => {
        setPassword2(e.target.value);
    };


  let [password, setPassword] = React.useState("");
  const handlePasswordChange = (e) => {
        setPassword(e.target.value);
  };

  let { from } = location.state || { from: { pathname: "/" } };
  let login = async () => {
    // let result = await authContext.API.login(`${username}`, `${password}`);


    // if (result.status === 200) {
    //   localStorage.setItem("token", result.token);
    //   authContext.setAuthState((prev) => {
    //     return {
    //       ...prev,
    //       isAuthenticated: true,
    //     };
    //   });
    //   history.replace(from);
    // } else {
    //   if (result.status === 400) {
    //     console.log(result & "Issue with username or password");
    //   } else {
    //     console.log(result);
    //   }
    // }

    if(password2 == password) {
        alert("Password change Success");
    }else{
        alert("Password change Failure please check form inputs");
    }

  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Reset Password
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={handleTextChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password2"
              label="Password2"
              type="password"
              id="password2"
              onChange={handlePasswordChange2}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={handlePasswordChange}
            />

            <Button
              onClick={login}
              fullWidth
              variant="contained"
              color="primary"
            >
              Reset Password
            </Button>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Porton Health
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}


