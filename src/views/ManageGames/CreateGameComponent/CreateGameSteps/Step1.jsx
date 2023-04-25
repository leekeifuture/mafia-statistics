// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'
import sweetAlertStyle
    from '../../../../assets/jss/material-dashboard-pro-react/views/sweetAlertStyle'
// core components
import GridContainer from '../../../../components/Grid/GridContainer'
import GridItem from '../../../../components/Grid/GridItem'
import {getMention} from '../../../../util/util'
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
const sweetAlertExtraStyle = {
    display: 'block',
    marginTop: '-100px',
    top: '40%',
    fontSize: '15px'
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
            hostState: '',
            alert: null
        }
    }

    sendState() {
        return this.state
    }

    successAlert(player) {
        const mention = getMention(player)
        const addedText = 'добавлен' ? mention === 'г-н' : 'добавлена'

        this.setState({
            alert: (
                <SweetAlert
                    success
                    style={sweetAlertExtraStyle}
                    title="Готово!"
                    onConfirm={() => this.hideAlert()}
                    onCancel={() => this.hideAlert()}
                    confirmBtnCssClass={
                        this.props.classes.button + ' ' + this.props.classes.success
                    }
                >
                    <small>{mention}</small>
                    {player.nickname}
                    {addedText} в базу данных клуба!
                </SweetAlert>
            )
        })
    }

    errorAlert(player, error) {
        const mention = getMention(player)
        let errorText = 'Ошибка сервера! Игрок не добавлен.'

        if (error.response.status === 409) {
            errorText = (<>
                <small>{mention}</small>
                {player.nickname} уже существует в базе данных клуба!
            </>)
        }

        this.setState({
            alert: (
                <SweetAlert
                    danger
                    style={sweetAlertExtraStyle}
                    title="Ошибка!"
                    onConfirm={() => this.hideAlert()}
                    onCancel={() => this.hideAlert()}
                    confirmBtnCssClass={
                        this.props.classes.button + ' ' + this.props.classes.success
                    }
                >
                    {errorText}
                </SweetAlert>
            )
        })
    }

    hideAlert() {
        this.setState({
            alert: null
        })
    }

    // function that verifies if a string has a given player or not
    verifyPlayer(player) {
        return Boolean(player)
    }

    change(player, stateName, type) {
        const stateItem = stateName === 'host'
            ? this.state.host
            : this.state['player' + stateName]

        if (type === 'player') {
            if (this.verifyPlayer(player)) {
                this.setState({['player' + stateName + 'State']: 'success'})
            } else {
                this.setState({['player' + stateName + 'State']: 'error'})
            }
            this.setState({['player' + stateName]: player})
        } else if (type === 'host') {
            if (this.verifyPlayer(player)) {
                this.setState({hostState: 'success'})
            } else {
                this.setState({hostState: 'error'})
            }
            this.setState({host: player})
        } else return

        if (player && player.hasOwnProperty('id'))
            this.props.onPlayerSelect(player, stateItem)
        else if (!player)
            this.props.onPlayerSelect({}, stateItem)
    }

    isValidated() {
        if (
            this.state.player1State === 'success' &&
            this.state.player2State === 'success' &&
            this.state.player3State === 'success' &&
            this.state.player4State === 'success' &&
            this.state.player5State === 'success' &&
            this.state.player6State === 'success' &&
            this.state.player7State === 'success' &&
            this.state.player8State === 'success' &&
            this.state.player9State === 'success' &&
            this.state.player10State === 'success' &&
            this.state.hostState === 'success'
        ) {
            return true
        }

        if (this.state.player1State !== 'success') {
            this.setState({player1State: 'error'})
        }
        if (this.state.player2State !== 'success') {
            this.setState({player2State: 'error'})
        }
        if (this.state.player3State !== 'success') {
            this.setState({player3State: 'error'})
        }
        if (this.state.player4State !== 'success') {
            this.setState({player4State: 'error'})
        }
        if (this.state.player5State !== 'success') {
            this.setState({player5State: 'error'})
        }
        if (this.state.player6State !== 'success') {
            this.setState({player6State: 'error'})
        }
        if (this.state.player7State !== 'success') {
            this.setState({player7State: 'error'})
        }
        if (this.state.player8State !== 'success') {
            this.setState({player8State: 'error'})
        }
        if (this.state.player9State !== 'success') {
            this.setState({player9State: 'error'})
        }
        if (this.state.player10State !== 'success') {
            this.setState({player10State: 'error'})
        }
        if (this.state.hostState !== 'success') {
            this.setState({hostState: 'error'})
        }

        return false
    }

    render() {
        const {classes} = this.props
        return (<>
            {this.state.alert}
            <GridContainer justifyContent="center">
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
                    const playerState = this.state[playerNumber + 'State']
                    return (
                        <GridItem xs={12} sm={6} key={i}>
                            <CustomPlayerInput
                                players={this.props.players}
                                value={this.state[playerNumber]}
                                success={playerState === 'success'}
                                error={playerState === 'error'}
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
                                        ),
                                    successAlert: player => this.successAlert(player),
                                    errorAlert: (player, error) => this.errorAlert(player, error)
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
        </>)
    }
}

export default withStyles(sweetAlertStyle)(withStyles(style)(Step1))
