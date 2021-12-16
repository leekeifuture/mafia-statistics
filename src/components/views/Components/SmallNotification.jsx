import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'
import withStyles from '@material-ui/core/styles/withStyles'
import Close from '@material-ui/icons/Close'
import React from 'react'
import notificationsStyle
    from '../../../assets/jss/material-dashboard-pro-react/views/notificationsStyle'
import Button from '../../CustomButtons/Button'

const SmallNotification = (props) => {
    const {classes} = props
    return (
        <Dialog
            classes={{
                root: classes.center + ' ' + classes.modalRoot,
                paper: classes.modal + ' ' + classes.modalSmall
            }}
            open={props.smallNotification}
            TransitionComponent={Slide}
            keepMounted
            aria-labelledby="small-modal-slide-title"
            aria-describedby="small-modal-slide-description"
        >
            <DialogTitle
                id="small-modal-slide-title"
                disableTypography
                className={classes.modalHeader}
            >
                <Button
                    justIcon
                    className={classes.modalCloseButton}
                    key="close"
                    aria-label="Close"
                    color="transparent"
                    onClick={() => props.handleClose('smallNotification')}
                >
                    <Close
                        className={classes.modalClose} />
                </Button>
            </DialogTitle>
            <DialogContent
                id="small-modal-slide-description"
                className={
                    classes.modalBody + ' ' + classes.modalSmallBody
                }
            >
                <h5>
                    {props.title}
                </h5>
                <h6>
                    {props.description}
                </h6>
            </DialogContent>
            <DialogActions
                className={
                    classes.modalFooter +
                    ' ' +
                    classes.modalFooterCenter
                }
            >
                <Button
                    onClick={() => props.handleClose('smallNotification')}
                    color="success"
                    simple
                    className={
                        classes.modalSmallFooterFirstButton +
                        ' ' +
                        classes.modalSmallFooterSecondButton
                    }
                >
                    Ок
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default withStyles(notificationsStyle)(SmallNotification)
