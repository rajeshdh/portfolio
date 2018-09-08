import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    color: 'primary'
  },
})

const Summary = ({ classes }) => (
  <div className={classes.root} >
      <div className="section-txt-btn">
        <Typography component="p">
          Hello! I’m Robert Smith. Senior Web Developer specializing in front
          end development. Experienced with all stages of the development cycle
          for dynamic web projects. Well-versed in numerous programming
          languages including JavaScript, SQL, and C. Stng background in project
          management and customer relations.
        </Typography>
      </div>
  </div>
)

Summary.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Summary)
