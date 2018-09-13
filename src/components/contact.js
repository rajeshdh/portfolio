import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core'
import { Send } from '@material-ui/icons'

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
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  sectionHeader: {
    marginBottom: '30px',
    color: '#ff4081',
  },
})

const Contact = props => {
  const { classes } = props

  return (
    <div className={classes.root}>
      <Typography variant="display2" className={classes.sectionHeader}>Feel free to contact me</Typography>
      <form
        name="contact"
        method="post"
        action="/success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <TextField
          label="Name"
          id="name"
          name="name"
          className={classes.textField}
          helperText="Your name"
          margin="normal"
          required
          fullWidth
        />
        <TextField
          label="Email"
          id="email"
          type="email"
          name="email"
          className={classes.textField}
          helperText="Your Email"
          margin="normal"
          required
          fullWidth
        />
        <TextField
          label="Message"
          id="message"
          name="message"
          className={classes.textField}
          helperText="Write your message here..."
          margin="normal"
          required
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Send
          <Send className={classes.rightIcon}>send</Send>
        </Button>
      </form>
    </div>
  )
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Contact)
