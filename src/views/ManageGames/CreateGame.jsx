import React from 'react'
import {trackPromise} from 'react-promise-tracker'
import {mafiaStatisticsApi} from '../../api/mafiaStatisticsApi'
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
import LoadingIndicator
    from '../../components/LoadingIndicator/LoadingIndicator'
import GameComponent from './Game/src/GameComponent'

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            host: {},
            number: '',
            bestMove: [],
            startDatetime: '',
            status: '',
            won: '',
            note: '',
            blackPlayerOne: {},
            blackPlayerTwo: {},
            donPlayer: {},
            sheriffPlayer: {},
            firstShootPlayer: {},
            players: [],
            bestPlayers: [],
            days: [],
            insertedAt: '',
            updatedAt: '',
            isAggregated: false,
            isLoading: true
        }
    }

    createGame() {
        trackPromise(
            mafiaStatisticsApi.createGame()
                .then(
                    data => this.setState(data),
                    error => this.props.history.push('/statistics/dashboard')
                )
        ).then(r => this.setState({isLoading: false}))
    }

    componentDidMount() {
        this.createGame()
    }

    render() {
        return (<>
            {this.state.isLoading
                ? <LoadingIndicator />
                : (<>
                    <GridContainer>
                        <GridItem xs={12}>
                            <GameComponent
                                state={this.state}
                                setState={this.setState}
                            />
                        </GridItem>
                    </GridContainer>
                </>)}
        </>)
    }
}

export default Game
