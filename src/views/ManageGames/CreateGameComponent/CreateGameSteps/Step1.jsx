import InputAdornment from '@material-ui/core/InputAdornment'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Email from '@material-ui/icons/Email'
// @material-ui/icons
import Face from '@material-ui/icons/Face'
import React from 'react'
// core components
import GridContainer from '../../../../components/Grid/GridContainer'
import GridItem from '../../../../components/Grid/GridItem'
import CustomPlayerInput from '../CustomPlayerInput'

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
            players: [],
            playersState: [],
            host: '',
            hostState: ''
        }
    }

    sendState() {
        return this.state
    }

    // function that verifies if a string has a given player or not
    verifyPlayer(value, length) {
        return value.length >= length
    }

    change(event, stateName, type) {
        switch (type) {
            case 'player':
                if (this.verifyPlayer(event.target.value)) {
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
            this.state.hostState === 'success'
        ) {
            return true
        } else {
            if (this.state.player1State !== 'success') {
                this.setState({player1State: 'error'})
            }
            if (this.state.hostState !== 'success') {
                this.setState({hostState: 'error'})
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
                        <div>Сперва нужно заполнить список всех игроков</div>
                        <small>
                            Начните вводить никнеймы игроков в полях и
                            результаты автоматически появятся в выпадающем
                            списке
                        </small>
                    </h4>
                </GridItem>
                {Array.from(Array(10)).map((x, i) => {
                    const number = i + 1
                    const playerNumber = `player${number}`
                    return (
                        <GridItem xs={12} sm={6}>
                            <CustomPlayerInput
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
                                            'player'
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
                    <CustomPlayerInput
                        success={this.state.hostState === 'success'}
                        error={this.state.hostState === 'error'}
                        labelText={
                            <span>
                                Ведущий
                            </span>
                        }
                        id="host"
                        formControlProps={{
                            fullWidth: true
                        }}
                        inputProps={{
                            onChange: event => this.change(
                                event,
                                'host',
                                'host'
                            ),
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
