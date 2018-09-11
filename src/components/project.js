import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}

class Project extends React.Component {
  state = {
    open: false,
    scroll: 'paper',
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { open } = this.state
    const { classes, title, description, summary } = this.props
    return (
      <React.Fragment>
        <Dialog open={open} onClose={this.handleClose} scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title">
          <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>
          <DialogContent>
            <DialogContentText>{description}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {title}
              </Typography>
              <Typography component="p">{summary}</Typography>
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
