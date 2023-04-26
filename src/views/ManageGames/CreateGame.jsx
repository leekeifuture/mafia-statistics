import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
// core components
import React from 'react'
import {trackPromise} from 'react-promise-tracker'
import {mafiaStatisticsApi} from '../../api/mafiaStatisticsApi'
import LoadingIndicator
    from '../../components/LoadingIndicator/LoadingIndicator'
import CreateGameComponent from './CreateGameComponent/CreateGameComponent'

import Step1 from './CreateGameComponent/CreateGameSteps/Step1.jsx'
import Step2 from './CreateGameComponent/CreateGameSteps/Step2.jsx'

class CreateGame extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            players: [],
            currentUser: {},
            isLoading: true
        }
    }

    onPlayerSelect = (newPlayer, prevPlayer) => {
        let players

        if (Object.keys(newPlayer).length === 0 &&
            Object.keys(prevPlayer).length !== 0) {
            players = this.state.players
                .filter(player => player.id !== prevPlayer.id)
        } else {
            players = this.state.players
                .filter(player => player.id !== newPlayer.id)
        }

        if ((prevPlayer && Object.keys(prevPlayer).length !== 0 &&
                !prevPlayer.hasOwnProperty('inputValue')) &&
            newPlayer !== prevPlayer)
            players.unshift(prevPlayer)

        this.setState({players})
    }

    componentDidMount() {
        trackPromise(
            mafiaStatisticsApi.getAllPlayers()
                .then(
                    players => this.setState({players}),
                    error => this.props.history.push('/auth/error')
                )
        ).then(r => this.setState({isLoading: false}))

        mafiaStatisticsApi.getPlayerById('me', true)
            .then(currentUser => this.setState({currentUser}))
    }

    render() {
        return (<>
            {this.state.isLoading
                ? <LoadingIndicator />
                : (
                    <GridContainer justifyContent="center">
                        <GridItem xs={12} sm={8}>
                            <CreateGameComponent
                                onPlayerSelect={this.onPlayerSelect}
                                players={this.state.players}
                                currentUser={this.state.currentUser}
                                validate
                                steps={[
                                    {
                                        stepName: 'Игроки',
                                        stepComponent: Step1,
                                        stepId: 'players'
                                    },
                                    {
                                        stepName: 'Роли',
                                        stepComponent: Step2,
                                        stepId: 'roles'
                                    }
                                ]}
                                title="Создание новой игры"
                                finishButtonClick={e => console.log(e)}
                            />
                        </GridItem>
                    </GridContainer>
                )}
        </>)
    }
}

export default CreateGame
