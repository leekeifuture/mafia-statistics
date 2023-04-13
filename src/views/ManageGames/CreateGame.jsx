import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
// core components
import React from 'react'
import {trackPromise} from 'react-promise-tracker'
import {mafiaStatisticsApi} from '../../api/mafiaStatisticsApi'
import CreateGameComponent from './CreateGameComponent/CreateGameComponent'

import Step1 from './CreateGameComponent/CreateGameSteps/Step1.jsx'
import Step2 from './CreateGameComponent/CreateGameSteps/Step2.jsx'

class CreateGame extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            players: [],
            isLoading: true
        }
    }

    componentDidMount() {
        trackPromise(
            mafiaStatisticsApi.getAllPlayers()
                .then(
                    players => this.setState({players}),
                    error => this.props.history.push('/auth/error')
                )
        ).then(r => this.setState({isLoading: false}))
    }

    render() {
        return (
            <GridContainer justify="center">
                <GridItem xs={12} sm={8}>
                    <CreateGameComponent
                        player={this.state.players}
                        validate
                        steps={[
                            {
                                stepName: 'Игроки',
                                stepComponent: Step1,
                                stepId: 'players',
                                players: this.state.players
                            },
                            {
                                stepName: 'Роли',
                                stepComponent: Step2,
                                stepId: 'roles',
                                players: this.state.players
                            }
                        ]}
                        title="Создание новой игры"
                        finishButtonClick={e => console.log(e)}
                    />
                </GridItem>
            </GridContainer>
        )
    }
}

export default CreateGame
