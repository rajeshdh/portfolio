import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    marginTop: '30px',
  },
  sectionText: {
    fontSize: '20px',
    fontWeight: 300,
    lineHeight: 1.8,
    textAlign: 'center',
  },
})

const Summary = ({ classes, summary }) => (
  <div className={classes.root}>
    <Typography className={classes.sectionText} component="p">
      {summary}
    </Typography>
  </div>
)

Summary.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Summary)
