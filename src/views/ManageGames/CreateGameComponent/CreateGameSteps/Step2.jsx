import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import React from 'react'

// core components
import customCheckboxRadioSwitch
    from '../../../../assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch'
import customSelectStyle
    from '../../../../assets/jss/material-dashboard-pro-react/customSelectStyle'
import GridContainer from '../../../../components/Grid/GridContainer'
import GridItem from '../../../../components/Grid/GridItem'

const style = {
    infoText: {
        fontWeight: '300',
        margin: '10px 0 30px',
        textAlign: 'center'
    },
    inputAdornmentIcon: {
        color: '#555'
    },
    choiche: {
        textAlign: 'center',
        cursor: 'pointer',
        marginTop: '20px'
    },
    ...customSelectStyle,
    ...customCheckboxRadioSwitch
}

class Step2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            players: [],
            blackPlayerOne: {},
            blackPlayerTwo: {},
            donPlayer: {},
            sheriffPlayer: {},
            blackPlayerOneState: '',
            blackPlayerTwoState: '',
            donPlayerState: '',
            sheriffPlayerState: '',
        }
    }

    sendState() {
        return this.state
    }

    // function that verifies if a string has a given player or not
    verifyPlayer(player) {
        return Boolean(player)
    }

    change(playerId, key) {
        const player = this.state.players.find((obj) => obj.id === playerId)

        if (this.verifyPlayer(player)) {
            this.setState({[key + 'State']: 'success'})

            // Unselect the player from other selects
            Object.keys(this.state).forEach((stateKey) => {
                if (
                    stateKey !== key &&
                    this.state[stateKey] &&
                    this.state[stateKey].id === playerId
                ) {
                    this.setState({[key + 'State']: 'error'})
                }
            })
        } else {
            this.setState({[key + 'State']: 'error'})
        }
        this.setState({[key]: player})
    }

    isValidated() {
        if (
            this.state.blackPlayerOneState === 'success' &&
            this.state.blackPlayerTwoState === 'success' &&
            this.state.donPlayerState === 'success' &&
            this.state.sheriffPlayerState === 'success'
        ) {
            return true
        }

        if (this.state.blackPlayerOneState !== 'success') {
            this.setState({blackPlayerOneState: 'error'})
        }
        if (this.state.blackPlayerTwoState !== 'success') {
            this.setState({blackPlayerTwoState: 'error'})
        }
        if (this.state.donPlayerState !== 'success') {
            this.setState({donPlayerState: 'error'})
        }
        if (this.state.sheriffPlayerState !== 'success') {
            this.setState({sheriffPlayerState: 'error'})
        }
    }

    getPlayers(allStates) {
        if (allStates && allStates.players) {
            const players = Array.from(Array(10)).map((x, i) => {
                const key = 'player' + (i + 1)
                if (this.props.allStates.players.hasOwnProperty(key)) {
                    return this.props.allStates.players[key]
                }
            })
            this.setState({players})
        }
        return []
    }

    componentDidUpdate(prevProps, prevState) {
        if (!this.state.players.length) this.getPlayers(this.props.allStates)
    }

    render() {
        const {classes} = this.props
        return (
            <div>
                <h4 className={classes.infoText}>
                    Дальше выберите роли игроков
                </h4>
                <GridContainer justifyContent='center'>
                    <GridItem xs={12} sm={12} md={12} lg={10}>
                        <GridContainer>
                            <GridItem xs={12} sm={6}>
                                <FormControl fullWidth
                                             error={this.state.blackPlayerOneState === 'error'}
                                             className={classes.selectFormControl}>
                                    <InputLabel
                                        htmlFor='simple-select'
                                        className={classes.selectLabel}
                                    >
                                        Мафия 1
                                    </InputLabel>
                                    <Select
                                        MenuProps={{
                                            className: classes.selectMenu
                                        }}
                                        classes={{
                                            select: classes.select
                                        }}
                                        value={this.state.blackPlayerOne.id}
                                        onChange={event =>
                                            this.change(event.target.value, 'blackPlayerOne')}
                                    >
                                        <MenuItem
                                            disabled
                                            classes={{
                                                root: classes.selectMenuItem
                                            }}
                                        >
                                            Выберите мафию 1
                                        </MenuItem>
                                        {this.state.players.map((player, index) => {
                                            return (
                                                <MenuItem
                                                    key={index}
                                                    classes={{
                                                        root: classes.selectMenuItem,
                                                        selected: classes.selectMenuItemSelected
                                                    }}
                                                    value={player.id}
                                                >
                                                    {player.nickname}
                                                </MenuItem>
                                            )
                                        })}
                                    </Select>
                                </FormControl>
                            </GridItem>
                            <GridItem xs={12} sm={6}>
                                <FormControl fullWidth
                                             error={this.state.blackPlayerTwoState === 'error'}
                                             className={classes.selectFormControl}>
                                    <InputLabel
                                        htmlFor='simple-select'
                                        className={classes.selectLabel}
                                    >
                                        Мафия 2
                                    </InputLabel>
                                    <Select
                                        MenuProps={{
                                            className: classes.selectMenu
                                        }}
                                        classes={{
                                            select: classes.select
                                        }}
                                        value={this.state.blackPlayerTwo.id}
                                        onChange={event =>
                                            this.change(event.target.value, 'blackPlayerTwo')}
                                    >
                                        <MenuItem
                                            disabled
                                            classes={{
                                                root: classes.selectMenuItem
                                            }}
                                        >
                                            Выберите мафию 2
                                        </MenuItem>
                                        {this.state.players.map((player, index) => {
                                            return (
                                                <MenuItem
                                                    key={index}
                                                    classes={{
                                                        root: classes.selectMenuItem,
                                                        selected: classes.selectMenuItemSelected
                                                    }}
                                                    value={player.id}
                                                >
                                                    {player.nickname}
                                                </MenuItem>
                                            )
                                        })}
                                    </Select>
                                </FormControl>
                            </GridItem>
                            <GridItem xs={12} sm={6}>
                                <FormControl fullWidth
                                             error={this.state.donPlayerState === 'error'}
                                             className={classes.selectFormControl}>
                                    <InputLabel
                                        htmlFor='simple-select'
                                        className={classes.selectLabel}
                                    >
                                        Дон
                                    </InputLabel>
                                    <Select
                                        MenuProps={{
                                            className: classes.selectMenu
                                        }}
                                        classes={{
                                            select: classes.select
                                        }}
                                        value={this.state.donPlayer.id}
                                        onChange={event =>
                                            this.change(event.target.value, 'donPlayer')}
                                    >
                                        <MenuItem
                                            disabled
                                            classes={{
                                                root: classes.selectMenuItem
                                            }}
                                        >
                                            Выберите дона
                                        </MenuItem>
                                        {this.state.players.map((player, index) => {
                                            return (
                                                <MenuItem
                                                    key={index}
                                                    classes={{
                                                        root: classes.selectMenuItem,
                                                        selected: classes.selectMenuItemSelected
                                                    }}
                                                    value={player.id}
                                                >
                                                    {player.nickname}
                                                </MenuItem>
                                            )
                                        })}
                                    </Select>
                                </FormControl>
                            </GridItem>
                            <GridItem xs={12} sm={6}>
                                <FormControl fullWidth
                                             error={this.state.sheriffPlayerState === 'error'}
                                             className={classes.selectFormControl}>
                                    <InputLabel
                                        htmlFor='simple-select'
                                        className={classes.selectLabel}
                                    >
                                        Шериф
                                    </InputLabel>
                                    <Select
                                        MenuProps={{
                                            className: classes.selectMenu
                                        }}
                                        classes={{
                                            select: classes.select
                                        }}
                                        value={this.state.sheriffPlayer.id}
                                        onChange={event =>
                                            this.change(event.target.value, 'sheriffPlayer')}
                                    >
                                        <MenuItem
                                            disabled
                                            classes={{
                                                root: classes.selectMenuItem
                                            }}
                                        >
                                            Выберите шерифа
                                        </MenuItem>
                                        {this.state.players.map((player, index) => {
                                            return (
                                                <MenuItem
                                                    key={index}
                                                    classes={{
                                                        root: classes.selectMenuItem,
                                                        selected: classes.selectMenuItemSelected
                                                    }}
                                                    value={player.id}
                                                >
                                                    {player.nickname}
                                                </MenuItem>
                                            )
                                        })}
                                    </Select>
                                </FormControl>
                            </GridItem>
                        </GridContainer>
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}

export default withStyles(style)(Step2)
