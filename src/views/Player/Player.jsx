import React from 'react'
import {mafiaStatisticsApi} from '../../api/mafiaStatisticsApi'
import GridContainer from '../../components/Grid/GridContainer'

class Player extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nickname: '',
            gamesTotal: 0,
            coupleStatistics: [],
            numbersStatistics: {},
            ratingStatistics: {},
            rolesHistoryStatistics: {},
            visitingStatistics: {},
            serialityStatistics: {}
        }
    }

    componentDidMount() {
        mafiaStatisticsApi.getPlayerById(this.props.match.params.id)
            .then(data => {
                    this.setState(data)
                }, error => {
                    console.error(error)
                }
            )
    }

    render() {
        console.log(this.state)
        return (
            <GridContainer>
            </GridContainer>
        )
    }
}

export default Player
