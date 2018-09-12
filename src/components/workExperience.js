import React from 'react'
import PropTypes from 'prop-types'
import { Timeline } from 'react-material-timeline'
import { Typography, Divider } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: theme.spacing.unit * 10,
    paddingBottom: theme.spacing.unit * 10,
    paddingLeft: theme.spacing.unit * 10,
    paddingRight: theme.spacing.unit * 10,
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  sectionHeader: {
    marginBottom: '30px',
  },
})

class WorkExperience extends React.Component {
  render() {
    const { classes, title, events } = this.props
    return (
      <div className={classes.root}>
        <Typography variant="display2" className={classes.sectionHeader}>
          {title}
        </Typography>
        <Divider />
        <Timeline events={events} />
      </div>
    )
  }
}

WorkExperience.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  events: PropTypes.array.isRequired,
}

export default withStyles(styles)(WorkExperience)
