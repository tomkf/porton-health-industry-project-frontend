import React from "react";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import { green, red } from "@material-ui/core/colors";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const GreenButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
}))(Button);

const RedButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    "&:hover": {
      backgroundColor: red[700],
    },
  },
}))(Button);

const state = {
  pages: [<Welcome />, <SelectAppTime />, <AuthenticateUser />, <AppDetails />],
  idx: 0,
};

export default function CheckIn() {
  const [paged, setPaged] = useState(state.pages[state.idx]);

  return (
    <div
      onClick={() =>
        setPaged(state.pages[state.idx % state.pages.length]) &
        console.log(state.idx)
      }
    >
      {paged}

      <Box mt={8}>
        <Copyright />
      </Box>
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

function Welcome() {
  const classes = useStyles();
  return (
    <div>
      <Grid>
        <Typography
          component="h1"
          variant="h1"
          color="inherit"
          align="center"
          noWrap
        >
          <br />
          <br />
          <br />
          <br />
          WELCOME
          <br />
          <br />
        </Typography>
      </Grid>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <form className={classes.form} noValidate>
            {/* <Link href="/admin/login"> */}

            <GreenButton
              variant="contained"
              color="primary"
              className={classes.margin}
              fullWidth
              onClick={() => state.idx++ & console.log(state.idx)}
            >
              <Typography component="h1" variant="h2">
                Check-In
              </Typography>
            </GreenButton>

            {/* </Link> */}
            <Grid container>
              <Grid item></Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}

function SelectAppTime() {
  const tiers = [
    {
      buttonText: "1:00 PM",
      buttonVariant: "contained",
    },
    {
      buttonText: "1:30 PM",
      buttonVariant: "outlined",
    },
    {
      buttonText: "2:00 PM",
      buttonVariant: "contained",
    },
    {
      buttonText: "2:30 PM",
      buttonVariant: "outlined",
    },
    {
      buttonText: "3:00 PM",
      buttonVariant: "contained",
    },
    {
      buttonText: "3:30 PM",
      buttonVariant: "outlined",
    },
  ];
  return (
    <div>
      <h1>
        <br />
        <br />
        <br />
        <br />
      </h1>

      {/* Hero unit */}
      <Container>
        <Grid container spacing={5} alignItems="flex-end">
          <Grid item xs={8}>
            <Card>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Please Select Appointment Time
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Current Time
                <br />
                12:00 AM
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
      {/* End hero unit */}
      <h1>
        <br />
        <br />
        <br />
        <br />
      </h1>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={4}
            >
              
              <Button
                fullWidth
                variant={tier.buttonVariant}
                color="primary"
                onClick={() => state.idx++ & console.log(state.idx)}
              >
                <Typography component="h1" variant="h2">
                  {tier.buttonText}
                </Typography>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

function AuthenticateUser() {
  const tiers = [
    {
      // title: "Free",
      // price: "0",
      // description: ["Description"],
      buttonText: "98473",
      buttonVariant: "contained",
    },
    {
      buttonText: "43894",
      buttonVariant: "outlined",
    },
    {
      buttonText: "83049",
      buttonVariant: "contained",
    },
    {
      buttonText: "29384",
      buttonVariant: "outlined",
    },
    {
      buttonText: "29384",
      buttonVariant: "contained",
    },
    {
      buttonText: "38492",
      buttonVariant: "outlined",
    },
  ];
  return (
    <div>
      <h1>
        <br />
        <br />
        <br />
        <br />
      </h1>

      {/* Hero unit */}
      <Container>
        <Grid container spacing={5} alignItems="flex-end">
          <Grid item xs={12}>
            <Card>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Please Verify Care Card Last 5 Digits
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Example Images here
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
      {/* End hero unit */}
      <h1>
        <br />
        <br />
        <br />
        <br />
      </h1>

      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={4}
            >
              <Button
                fullWidth
                variant={tier.buttonVariant}
                color="primary"
                onClick={() => state.idx++ & console.log(state.idx)}
              >
                <Typography component="h1" variant="h2">
                  {tier.buttonText}
                </Typography>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Container>
      <h1>
        <br />
        <br />
        <br />
        <br />
      </h1>
      <Container component="main" maxWidth="xs">
        <RedButton
          // fullWidth
          variant="contained"
          color="primary"
          onClick={() => state.idx-- & console.log(state.idx)}
        >
          <Typography component="h1" variant="h2">
            Back
          </Typography>
        </RedButton>
      </Container>
    </div>
  );
}

function AppDetails() {
  const tiers = [
    {
      gridSpace: 3,
      required: true,
      id: "firstName",
      name: "firstName",
      title: "First Name",
      autoComplete: "fname",
      description: ["Description"],
      buttonVariant: "contained",
      //Example Details
      placeholder: "Don",
    },
    {
      gridSpace: 3,
      required: true,
      id: "lastName",
      name: "lastName",
      title: "Last Name",
      autoComplete: "lname",
      description: ["Description"],
      buttonVariant: "contained",
      //Example Details
      placeholder: "Chen",
    },
    {
      gridSpace: 3,
      required: false,
      id: "phoneNum",
      name: "phoneNum",
      title: "Phone Number",
      autoComplete: "pnum",
      description: ["Description"],
      buttonVariant: "contained",
      //Example Details
      placeholder: "(123) 456 - 5555",
    },
    {
      gridSpace: 12,
      required: true,
      id: "address",
      name: "address",
      title: "Address line",
      autoComplete: "billing address-line",
      description: ["Description"],
      buttonVariant: "contained",
      //Example Details
      placeholder: "123123",
    },
    
    {
      gridSpace: 3,
      required: true,
      id: "city",
      name: "city",
      title: "City",
      autoComplete: "billing address-level2",
      description: ["Description"],
      buttonVariant: "contained",
      //Example Details
      placeholder: "Vancouver",
    },
    {
      gridSpace: 3,
      required: false,
      id: "state",
      name: "state",
      title: "State/Province/Region",
      autoComplete: "billing address-level2",
      description: ["Description"],
      buttonVariant: "contained",
      //Example Details
      placeholder: "British Columbia",
    },
    {
      gridSpace: 3,
      required: false,
      id: "zip",
      name: "zip",
      title: "Zip / Postal code",
      autoComplete: "billing postal-code",
      description: ["Description"],
      buttonVariant: "contained",
      //Example Details
      placeholder: "V4V 4V4",
    },
  ];
  return (
    <div>
      <h1>
        <br />
        <br />
        <br />
        <br />
      </h1>

      {/* Hero unit */}
      <Container>
        <Grid container spacing={5} alignItems="flex-end">
          <Grid item xs={12}>
            <Card>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Please Review Details
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
      {/* End hero unit */}
      <h1>
        <br />
        <br />
        <br />
        <br />
      </h1>
      <Container maxWidth="xl" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.gridSpace}>
              <Card>
                <CardHeader
                  title={tier.title}
                  titleTypographyProps={{ align: "center" }}
                />
                <CardContent>
                  <TextField
                    required={tier.required}
                    id={tier.id}
                    name={tier.firstName}
                    fullWidth
                    autoComplete={tier.autoComplete}
                    placeholder={tier.placeholder}
                    default = {tier.default}
                  />

                  {/* <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul> */}
                </CardContent>
                <CardActions>

                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <h1>
        <br />
        <br />
        <br />
        <br />
      </h1>
      <Container component="main" maxWidth="md">

      <Grid container spacing={5} alignItems="flex-end">
          <Grid item xs={4}>
          <RedButton
          variant="contained"
          color="primary"
          onClick={() => state.idx-- & console.log(state.idx)}
        >
          <Typography component="h1" variant="h2">
            Back
          </Typography>
        </RedButton>
          </Grid>

          <Grid item xs={4}>
          <GreenButton
          variant="contained"
          color="primary"
          onClick={() => state.idx++ & console.log(state.idx)}
        >
          <Typography component="h1" variant="h2">
            Complete Check-In
          </Typography>
        </GreenButton>
          </Grid>
        </Grid>





       
      
      </Container>
    </div>
  );
}
