import InputAdornment from '@material-ui/core/InputAdornment'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Email from '@material-ui/icons/Email'
// @material-ui/icons
import Face from '@material-ui/icons/Face'
import CustomInput from 'components/CustomInput/CustomInput.jsx'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import React from 'react'

const style = {
    infoText: {
        fontWeight: '300',
        margin: '10px 0 30px',
        textAlign: 'center'
    },
    inputAdornmentIcon: {
        color: '#555'
    },
    inputAdornment: {
        position: 'relative'
    }
}

class Step1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            player1: '',
            player1State: '',
            lastname: '',
            lastnameState: '',
            email: '',
            emailState: ''
        }
    }

    sendState() {
        return this.state
    }

    // function that returns true if value is email, false otherwise
    verifyEmail(value) {
        var emailRex = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (emailRex.test(value)) {
            return true
        }
        return false
    }

    // function that verifies if a string has a given length or not
    verifyLength(value, length) {
        if (value.length >= length) {
            return true
        }
        return false
    }

    change(event, stateName, type, stateNameEqualTo) {
        switch (type) {
            case 'email':
                if (this.verifyEmail(event.target.value)) {
                    this.setState({[stateName + 'State']: 'success'})
                } else {
                    this.setState({[stateName + 'State']: 'error'})
                }
                break
            case 'length':
                if (this.verifyLength(event.target.value, stateNameEqualTo)) {
                    this.setState({[stateName + 'State']: 'success'})
                } else {
                    this.setState({[stateName + 'State']: 'error'})
                }
                break
            default:
                break
        }
        this.setState({[stateName]: event.target.value})
    }

    isValidated() {
        if (
            this.state.player1State === 'success' &&
            this.state.lastnameState === 'success' &&
            this.state.emailState === 'success'
        ) {
            return true
        } else {
            if (this.state.player1State !== 'success') {
                this.setState({player1State: 'error'})
            }
            if (this.state.lastnameState !== 'success') {
                this.setState({lastnameState: 'error'})
            }
            if (this.state.emailState !== 'success') {
                this.setState({emailState: 'error'})
            }
        }
        return false
    }

    render() {
        const {classes} = this.props
        return (
            <GridContainer justify="center">
                <GridItem xs={12} sm={12}>
                    <h4 className={classes.infoText}>
                        Начните вводить никнеймы игроков в полях и результаты
                        автоматически появятся в выпадающем списке
                    </h4>
                </GridItem>
                {Array.from(Array(10)).map((x, i) => {
                    const number = i + 1
                    const playerNumber = `player${number}`
                    return (
                        <GridItem xs={12} sm={6}>
                            <CustomInput
                                success={this.state.player1State === 'success'}
                                error={this.state.player1State === 'error'}
                                labelText={
                                    <span>
                                        #{number}
                                    </span>
                                }
                                id={playerNumber}
                                formControlProps={{
                                    fullWidth: true
                                }}
                                inputProps={{
                                    onChange: event =>
                                        this.change(
                                            event,
                                            playerNumber,
                                            'length',
                                            3
                                        ),
                                    endAdornment: (
                                        <InputAdornment
                                            position="end"
                                            className={classes.inputAdornment}
                                        >
                                            <Face
                                                className={classes.inputAdornmentIcon} />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </GridItem>
                    )
                })}
                <GridItem xs={12} sm={12} md={12} lg={10}>
                    <CustomInput
                        success={this.state.emailState === 'success'}
                        error={this.state.emailState === 'error'}
                        labelText={
                            <span>
                                Ведущий
                            </span>
                        }
                        id="email"
                        formControlProps={{
                            fullWidth: true
                        }}
                        inputProps={{
                            onChange: event => this.change(event, 'email', 'email'),
                            endAdornment: (
                                <InputAdornment
                                    position="end"
                                    className={classes.inputAdornment}
                                >
                                    <Email
                                        className={classes.inputAdornmentIcon} />
                                </InputAdornment>
                            )
                        }}
                    />
                </GridItem>
            </GridContainer>
        )
    }
}

export default withStyles(style)(Step1)
