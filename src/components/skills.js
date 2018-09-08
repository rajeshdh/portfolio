import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Paper,
  Typography,
  Divider,
  LinearProgress,
  withStyles,
} from '@material-ui/core'

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
})

class Skills extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Typography variant="display2">Professional Skills</Typography>
        <Divider />
        <Grid container spacing={12}>
          <Grid item xs={6}>
            <Paper>
              <Typography variant="title">Node.js</Typography>
              <LinearProgress variant="determinate" value="80" />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper>
              <Typography variant="title">MongoDB</Typography>
              <LinearProgress
                color="secondary"
                variant="determinate"
                value="80"
              />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper>
              <Typography variant="title">Reactjs</Typography>
              <LinearProgress variant="determinate" value="70" />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper>
              <Typography variant="title">AngularJs</Typography>
              <LinearProgress
                color="secondary"
                variant="determinate"
                value="80"
              />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper>
              <Typography variant="title">.NET</Typography>
              <LinearProgress variant="determinate" value="60" />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper>
              <Typography variant="title">SQL Server</Typography>
              <LinearProgress
                color="secondary"
                variant="determinate"
                value="85"
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

Skills.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Skills)
