// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
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
            player1: {},
            player2: {},
            player3: {},
            player4: {},
            player5: {},
            player6: {},
            player7: {},
            player8: {},
            player9: {},
            player10: {},
            host: {},
            player1State: '',
            player2State: '',
            player3State: '',
            player4State: '',
            player5State: '',
            player6State: '',
            player7State: '',
            player8State: '',
            player9State: '',
            player10State: '',
            hostState: ''
        }
    }

    sendState() {
        return this.state
    }

    // function that verifies if a string has a given player or not
    verifyPlayer(player) {
        return Boolean(player)
    }

    change(player, stateName, type) {
        switch (type) {
            case 'player':
                if (this.verifyPlayer(player)) {
                    this.setState({['player' + stateName + 'State']: 'success'})
                } else {
                    this.setState({['player' + stateName + 'State']: 'error'})
                }
                this.setState({['player' + stateName]: player})
                break
            case 'host':
                if (this.verifyPlayer(player)) {
                    this.setState({hostState: 'success'})
                } else {
                    this.setState({hostState: 'error'})
                }
                this.setState({host: player})
                break
            default:
                break
        }
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
                        <GridItem xs={12} sm={6} key={i}>
                            <CustomPlayerInput
                                players={this.props.players}
                                value={this.state[playerNumber]}
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
                                            number,
                                            'player'
                                        )
                                }}
                            />
                        </GridItem>
                    )
                })}
                <GridItem xs={12} sm={12} md={12} lg={10}>
                    <CustomPlayerInput
                        players={this.props.players}
                        value
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
                            )
                        }}
                    />
                </GridItem>
            </GridContainer>
        )
    }
}

export default withStyles(style)(Step1)
