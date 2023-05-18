import React from 'react'
import {trackPromise} from 'react-promise-tracker'
import {mafiaStatisticsApi} from '../../api/mafiaStatisticsApi'
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
import LoadingIndicator
    from '../../components/LoadingIndicator/LoadingIndicator'
import GameComponent from './GameComponent/src/GameComponent'

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

    getGameById(id) {
        trackPromise(
            mafiaStatisticsApi.getGameById(id)
                .then(
                    data => this.setState(data),
                    error => this.props.history.push('/statistics/dashboard')
                )
        ).then(r => this.setState({isLoading: false}))
    }

    componentDidMount() {
        this.getGameById(this.props.match.params.id)
    }

    render() {
        this.setState = this.setState.bind(this)
        return (<>
            {this.state.isLoading
                ? <LoadingIndicator/>
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
