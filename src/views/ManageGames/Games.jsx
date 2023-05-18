// @material-ui/core components
// @material-ui/icons
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import React from 'react'
import {trackPromise} from 'react-promise-tracker'
import {mafiaStatisticsApi} from '../../api/mafiaStatisticsApi'
// react component for creating dynamic tables
import LoadingIndicator
    from '../../components/LoadingIndicator/LoadingIndicator'
import GamesComponent from './GamesComponent'

class Games extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            games: [],
            gamesCount: 0,
            limit: 999999,
            page: 1,
            isLoading: true
        }
    }

    componentDidMount() {
        trackPromise(
            mafiaStatisticsApi.getAllGames(this.state.limit, this.state.page)
                .then(
                    data => this.setState(data),
                    error => this.props.history.push('/auth/error')
                )
        ).then(r => this.setState({isLoading: false}))
    }

    render() {
        const {classes} = this.props
        return (<>
            {this.state.isLoading
                ? <LoadingIndicator/>
                : (<>
                    <GridContainer>
                        <GridItem xs={12}>
                            <GamesComponent
                                classes={classes}
                                games={this.state.games}
                                gamesCount={this.state.gamesCount}
                            />
                        </GridItem>
                    </GridContainer>
                </>)}
        </>)
    }
}

export default Games
