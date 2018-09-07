import React from 'react'
import { Link } from 'gatsby'
import { withStyles } from '@material-ui/core/styles'
import withRoot from '../withRoot'

// import Layout from '../components/layout'
const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});
class SecondPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    )
  }
}

export default withRoot(withStyles(styles)(SecondPage))
