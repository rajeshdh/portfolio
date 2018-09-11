import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { withStyles } from '@material-ui/core/styles'
import withRoot from '../withRoot'

import Layout from '../components/layout'
import About from '../components/about'
import Skills from '../components/skills'
import WorkExperience from '../components/workExperience'
import ProjectList from '../components/projectList'
import Contact from '../components/contact'

import workEvents from '../data/workEvents'
import educationEvents from '../data/educationEvents'

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 20,
    paddingLeft: theme.spacing.unit * 40,
    paddingRight: theme.spacing.unit * 40,
  },
})

class Index extends React.Component {
  render() {
    const { classes, data } = this.props
    return (
      <Layout>
        <div className={classes.root}>
          <About userInfo={data.site.siteMetadata.about} />
          <Skills />
          <ProjectList />
          <WorkExperience title="Work Experience" events={workEvents} />
          <WorkExperience title="Education" events={educationEvents} />
          <Contact />
        </div>
      </Layout>
    )
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withRoot(withStyles(styles)(Index))

export const query = graphql`
  query allImgsQuery {
    site {
      siteMetadata {
       about {
         name,
         jobTitle,
         address,
         age,
         phone,
         freelance,
         summary
       }
      }
    }
  }
`