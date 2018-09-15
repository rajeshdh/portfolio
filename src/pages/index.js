import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { withStyles } from '@material-ui/core/styles'
import withRoot from '../withRoot'

import Layout from '../components/Layout'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

import Timeline from '../components/Timeline'

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
          <Projects />
          <Timeline />
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
         summary,
         resume
       }
      }
    }
  }
`
