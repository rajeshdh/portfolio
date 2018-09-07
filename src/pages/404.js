import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import withRoot from '../withRoot'

// import Layout from '../components/layout'
const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
})
class NotFoundPage extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    )
  }
}

export default withRoot(withStyles(styles)(NotFoundPage))
