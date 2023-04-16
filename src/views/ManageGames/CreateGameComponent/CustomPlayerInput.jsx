import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

import customInputStyle
    from 'assets/jss/material-dashboard-pro-react/components/customInputStyle.jsx'
// nodejs library that concatenates classes
import classNames from 'classnames'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
import React from 'react'
import FreeSoloCreateOptionDialog from './FreeSoloCreateOptionDialog'

function CustomPlayerInput({...props}) {
    const {
        classes,
        formControlProps,
        labelText,
        id,
        inputProps,
        error,
        white,
        inputRootCustomClasses,
        success,
        helpText,
        value,
        players
    } = props

    const labelClasses = classNames({
        [' ' + classes.labelRootError]: error,
        [' ' + classes.labelRootSuccess]: success && !error
    })
    const underlineClasses = classNames({
        [classes.underlineError]: error,
        [classes.underlineSuccess]: success && !error,
        [classes.underline]: true,
        [classes.whiteUnderline]: white
    })
    const marginTop = classNames({
        [inputRootCustomClasses]: inputRootCustomClasses !== undefined
    })
    const inputClasses = classNames({
        [classes.input]: true,
        [classes.whiteInput]: white
    })
    var formControlClasses
    if (formControlProps !== undefined) {
        formControlClasses = classNames(
            formControlProps.className,
            classes.formControl
        )
    } else {
        formControlClasses = classes.formControl
    }
    var helpTextClasses = classNames({
        [classes.labelRootError]: error,
        [classes.labelRootSuccess]: success && !error
    })

    return (
        <FormControl {...formControlProps} className={formControlClasses}>
            <FreeSoloCreateOptionDialog
                players={players}
                value={value}
                error={error}
                classes={{
                    input: inputClasses,
                    root: marginTop
                }}
                id={id}
                label={labelText}
                {...inputProps}
            />
            {helpText !== undefined ? (
                <FormHelperText id={id + '-text'} className={helpTextClasses}>
                    {helpText}
                </FormHelperText>
            ) : null}
        </FormControl>
    )
}

CustomPlayerInput.propTypes = {
    classes: PropTypes.object.isRequired,
    labelText: PropTypes.node,
    id: PropTypes.string,
    inputProps: PropTypes.object,
    formControlProps: PropTypes.object,
    inputRootCustomClasses: PropTypes.string,
    error: PropTypes.bool,
    success: PropTypes.bool,
    white: PropTypes.bool,
    helpText: PropTypes.node,
    value: PropTypes.string,
    players: PropTypes.array
}

export default withStyles(customInputStyle)(CustomPlayerInput)
