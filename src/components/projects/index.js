import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import Project from './project'
import projectData from './data'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 700,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  sectionHeader: {
    marginBottom: '30px',
    color: '#ff4081',
  },
})

function Projects(props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <Typography variant="display2" className={classes.sectionHeader}>
        Projects
      </Typography>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={8}>
            {projectData.map((data,i) => (
              <Grid key={i} item>
                <Project
                  title={data.title}
                  description={data.description}
                  summary={data.summary}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Projects)
