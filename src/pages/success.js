import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
})

const Success = ({ classes }) => (
  <div>
    <Helmet>
      <title>Thank you</title>
      <meta name="description" content="Success Page" />
    </Helmet>
    <div className={classes.root}>
      <Typography variant="display1" gutterBottom>
        Thank you for contacting Me!
      </Typography>
      <Typography variant="subheading" gutterBottom>
          I will reply as soon as possible.
        </Typography>
    </div>
  </div>
)

Success.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Success)
