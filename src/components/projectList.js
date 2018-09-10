import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import Project from './project'

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
})

const tileData = [
  {
    img: 'image',
    title: 'Image',
    author: 'author',
    description: ` Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
    across all continents except Antarctica`,
  },
  {
    img: 'image2',
    title: 'Image2',
    author: 'author2',
    description: ` Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
    across all continents except Antarctica`,
  },
  {
    img: 'image3',
    title: 'Image3',
    author: 'author3',
    description: ` Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
    across all continents except Antarctica`,
  },
  {
    img: 'image4',
    title: 'Image3',
    author: 'author3',
    description: ` Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
    across all continents except Antarctica`,
  },
  {
    img: 'image5',
    title: 'Image3',
    author: 'author3',
    description: ` Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
    across all continents except Antarctica`,
  },
  {
    img: 'image6',
    title: 'Image3',
    author: 'author3',
    description: ` Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
    across all continents except Antarctica`,
  },
]

function ProjectList(props) {
  const { classes } = props

  return (
    <Grid container className={classes.root} spacing={16}>
    <Typography variant="display2">Projects</Typography>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={8}>
          {tileData.map(tile => (
            <Grid key={tile.img} item>
              <Project title={tile.title} description={tile.description} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

ProjectList.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProjectList)
