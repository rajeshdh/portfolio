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

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
})

const About = ({ classes }) => (
  <div>
    <Paper className={classes.root} elevation={1}>
      <Grid container spacing={12}>
        <Grid item xs={5}>
          <img
            alt=""
            src="https://rscard.px-lab.com/startuper/wp-content/uploads/sites/2/2015/11/startuper-1-299x347.jpg"
            srcSet="https://rscard.px-lab.com/startuper/wp-content/uploads/sites/2/2015/11/startuper-1-598x644.jpg 2x"
            className="photo"
          />
        </Grid>
        <Grid item xs={7}>
          <div className="profile-info">
            <div className="profile-items clearfix">
              <div className="profile-preword">
                <span>Hello</span>
              </div>
            </div>
            <Typography
              style={{ display: 'inline-block' }}
              variant="title"
              gutterBottom
            >
              I'm
            </Typography>
            &nbsp;
            <Typography
              style={{ display: 'inline-block' }}
              variant="headline"
              gutterBottom
            >
              Rajesh Dhiman
            </Typography>
            <Divider />
            <Typography variant="display1" gutterBottom>
              Developer and Startup entrepreneur
            </Typography>
          </div>
          <Divider />
          <List component="nav">
            <ListItem button>
              <ListItemText primary="Age" />
              <ListItemText primary="29" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Address" />
              <ListItemText primary="24058, Belgium, Brussels, Liutte 27, BE" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Phone" />
              <ListItemText primary="+1 256 254 84 56" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Freelance" />
              <ListItemText primary="till March 25, 2018" />
            </ListItem>
            <Divider />
          </List>
        </Grid>
      </Grid>
    </Paper>
    <Social />
    <Summary />
  </div>
)

About.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(About)
