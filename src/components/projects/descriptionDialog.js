import React from 'react'
import Button from '@material-ui/core/Button'
// import Typography from '@material-ui/core/Typography'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'

class DescriptionDialog extends React.Component {
  render() {
    const { title, open, description } = this.props
    return (
      <React.Fragment>
        <Dialog
          open={open}
          onClose={this.props.handleClose}
          scroll="paper"
          aria-labelledby="scroll-dialog-title"
        >
          <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>
          <DialogContent>
            <DialogContentText>{description}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.props.handleClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    )
  }
}

export default DescriptionDialog
