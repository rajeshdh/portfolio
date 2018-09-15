import React from 'react'
import PropTypes from 'prop-types'
import {
  Paper,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  withStyles,
  Divider,
} from '@material-ui/core'

import Social from './social'
import Summary from './summary'
import './about.css'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
})

const About = ({ classes, userInfo }) => (
  <div>
    <Paper className={classes.root} elevation={2}>
      <Grid container spacing={24}>
        <Grid item xs={5}>
          <img
            alt=""
            src="https://s.gravatar.com/avatar/82d06160e12c4b11f8ccfd363a168963?s=350"
            className="photo"
          />
        </Grid>
        <Grid item xs={7}>
          <div className="profile-info">
            <div className="speech-bubble">
              <div className="arrow bottom right" />
              <span>Hello</span>
            </div>

            <Typography
              style={{ display: 'inline-block' }}
              variant="display1"
              gutterBottom
            >
              I'm &nbsp;
            </Typography>

            <Typography
              style={{ display: 'inline-block' }}
              variant="display1"
              gutterBottom
            >
              {userInfo.name}
            </Typography>
            <Typography variant="title" gutterBottom>
              {userInfo.jobTitle}
            </Typography>
          </div>
          <Divider />
          <List component="nav">
            <ListItem button>
              <ListItemText primary="Age" />
              <ListItemText primary={userInfo.age} />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Address" />
              <ListItemText primary={userInfo.address} />
            </ListItem>
            <Divider />
          </List>
        </Grid>
      </Grid>
    </Paper>
    <Social resumeUrl={userInfo.resume} />
    <Summary summary={userInfo.summary} />
  </div>
)

About.propTypes = {
  classes: PropTypes.object.isRequired,
  userInfo: PropTypes.object.isRequired,
}

export default withStyles(styles)(About)
