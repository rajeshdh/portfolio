import React from 'react'
import PropTypes from 'prop-types'
import { Timeline } from 'react-material-timeline'
import { Typography, Divider } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
})


class WorkExperience extends React.Component {
  render() {
    const { classes, title, events } = this.props
    return (
      <div className={classes.root}>
        <Typography variant="display2">{title}</Typography>
        <Divider/>
        <Timeline events={events} />
      </div>
    )
  }
}

WorkExperience.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  events: PropTypes.array.isRequired
}

export default withStyles(styles)(WorkExperience)
