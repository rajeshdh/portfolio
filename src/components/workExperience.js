import React from 'react'
import PropTypes from 'prop-types'
import { Timeline } from 'react-material-timeline'
import { Avatar, Icon, Typography, Divider } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
})

const events = [
  {
    title: 'Event 1',
    subheader: new Date().toDateString(),
    description: ['Some description for event 1'],
    icon: (
      <Avatar>
        <Icon>work</Icon>
      </Avatar>
    ),
  },
  {
    title: 'Event 2',
    subheader: new Date().toDateString(),
    description: ['Some description for event 2'],
    icon: (
      <Avatar>
        <Icon>home</Icon>
      </Avatar>
    ),
  },
]

class WorkExperience extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Typography variant="display2">Work Experience</Typography>
        <Divider/>
        <Timeline events={events} />
      </div>
    )
  }
}

WorkExperience.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(WorkExperience)
