import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography, Divider, withStyles } from '@material-ui/core'

import Skill from './skill'

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
    flexGrow: 1,
  },
})

class Skills extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <Grid container className={classes.root} spacing={16}>
        <Typography variant="display2">Professional Skills</Typography>
        <Divider />
        <Grid container spacing={8}>
          <Skill title={'Node.js'} value="90" />
          <Skill title={'MongoDB'} value="85" />
          <Skill title={'ReactJs'} value="70" />
          <Skill title={'AngularJs'} value="85" />
          <Skill title={'.NET'} value="75" />
          <Skill title={'SQL Server'} value="80" />
        </Grid>
      </Grid>
    )
  }
}

Skills.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Skills)
