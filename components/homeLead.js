import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0'
  },
  leadContainer:{
    padding: '100px 0',
    backgroundImage: 'linear-gradient(to top, #accbee 0%, #e7f0fd 100%)',
    height: '100vh'
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function HomeLead() {
  const classes = useStyles();

    return (
    <div className={classes.root}>
      <Grid container alignItems="center" justifyContent="center" className={classes.leadContainer}>
        <Grid item xs={4}>
          <Paper elevation={0} className={classes.paper}>
          <Typography variant="h1" component="h4" gutterBottom>
                Rahul Krishna
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
        Full Stack Web Developer.
      </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
