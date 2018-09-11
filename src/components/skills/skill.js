import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography, LinearProgress, withStyles } from '@material-ui/core'

const styles = theme => ({
  skillItem: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
})

class Skill extends React.Component {
  timer = null

  state = {
    completed: 0,
    finalValue: this.props.value,
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 100)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  progress = () => {
    const { completed, finalValue } = this.state
    if (completed < finalValue) {
      const diff = Math.random() * 10
      this.setState({ completed: Math.min(completed + diff, 100) })
    } else {
      this.setState({ completed: finalValue })
    }
  }

  render() {
    const { classes, title } = this.props
    return (
      <Grid item xs={6} className={classes.skillItem}>
        <Typography variant="subheading">{title}</Typography>
        <LinearProgress
          color="secondary"
          variant="determinate"
          value={this.state.completed}
        />
      </Grid>
    )
  }
}

Skill.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Skill)
