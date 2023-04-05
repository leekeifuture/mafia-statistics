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
            isLoading: true
        }
    }

    componentDidMount() {
        trackPromise(
            mafiaStatisticsApi.getAllGames()
                .then(
                    data => this.setState({games: data}),
                    error => this.props.history.push('/auth/error')
                )
        ).then(r => this.setState({isLoading: false}))
    }

    render() {
        const {classes} = this.props
        return (<>
            {this.state.isLoading
                ? <LoadingIndicator />
                : (<>
                    <GridContainer>
                        <GridItem xs={12}>
                            <GamesComponent
                                classes={classes}
                                games={this.state.games}
                            />
                        </GridItem>
                    </GridContainer>
                </>)}
        </>)
    }
}

export default Games
