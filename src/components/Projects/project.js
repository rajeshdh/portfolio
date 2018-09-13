import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'


import DescriptionDialog from './descriptionDialog'
import Tag from './tag'

const styles = theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
})

class Project extends React.Component {
  state = {
    open: false,
  }

  handleClose = () => {
    this.setState({
      open: false,
    })
  }

  handleClick = () => {
    this.setState({
      open: true,
    })
  }
  render() {
    const { open } = this.state
    const { classes, title, description, summary, tagsArr } = this.props
    
    return (
      <React.Fragment>
        <DescriptionDialog
          title={title}
          description={description}
          open={open}
          handleClose={this.handleClose}
        />
        <Card className={classes.card}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {title}
              </Typography>
              <Typography component="p">{summary}</Typography>
              {tagsArr.map((tag, i) => (
                <Tag key={i} tag={tag} />
              ))}
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={this.handleClick}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </React.Fragment>
    )
  }
}

Project.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Project)
