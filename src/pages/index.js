import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import withRoot from '../withRoot'

import Layout from '../components/layout'
import About from '../components/about'
import Skills from '../components/skills'
import WorkExperience from '../components/workExperience'
import ProjectList from '../components/projectList'

import workEvents from '../data/workEvents'
import educationEvents from '../data/educationEvents'

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
    paddingLeft: theme.spacing.unit * 40,
    paddingRight: theme.spacing.unit * 40
  },
})

class Index extends React.Component {
 
  render() {
    const { classes } = this.props
    return (
      <Layout>
        <div className={classes.root}>
          <About />
          <Skills />
          <ProjectList />
          <WorkExperience title="Work Experience" events={workEvents} />
          <WorkExperience title="Education" events={educationEvents} />
        </div>
      </Layout>
    )
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withRoot(withStyles(styles)(Index))
