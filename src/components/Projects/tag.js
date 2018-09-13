import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'

const styles = theme => ({
  chip: {
    margin: theme.spacing.unit,
  },
})

const Tag = ({ classes, tag }) => <Chip label={tag} className={classes.chip} />

Tag.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Tag)
