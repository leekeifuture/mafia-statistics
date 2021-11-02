import withStyles from '@material-ui/core/styles/withStyles'
import dashboardStyle
    from 'assets/jss/material-dashboard-pro-react/views/dashboardStyle'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import PropTypes from 'prop-types'
import React from 'react'
import {mafiaStatisticsApi} from '../../api/mafiaStatisticsApi'
import RatingTableComponent from './RatingTableComponent'
import RecordsComponent from './RecordsComponent'
import TopGamesTableComponent from './TopGamesTableComponent'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            winSeriesPlayerId: null,
            winSeriesPlayerGender: '',
            winSeriesPlayerNickname: '',
            winSeriesGames: 0,
            defeatSeriesPlayerId: null,
            defeatSeriesPlayerGender: '',
            defeatSeriesPlayerNickname: '',
            defeatSeriesGames: 0,
            visitingSeriesPlayerId: null,
            visitingSeriesPlayerGender: '',
            visitingSeriesPlayerNickname: '',
            visitingSeriesPercent: 0,
            firstShootingSeriesPlayerId: null,
            firstShootingSeriesPlayerGender: '',
            firstShootingSeriesPlayerNickname: '',
            firstShootingSeriesPercent: 0,
            topGamesTable: [],
            topRatingTable: []
        }
    }

    componentDidMount() {
        mafiaStatisticsApi.getDashboardInfo()
            .then(data => {
                    this.setState(data)
                }, error => {
                    console.error(error)
                }
            )
    }

    render() {
        const {classes} = this.props
        return (
            <div>
                <GridContainer>
                    <RecordsComponent
                        classes={classes}
                        state={this.state}
                    />
                </GridContainer>
                <GridContainer>
                    <GridItem xs={12} sm={6} md={6} lg={6}>
                        <TopGamesTableComponent
                            classes={classes}
                            topGamesTable={this.state.topGamesTable}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={6} md={6} lg={6}>
                        <RatingTableComponent
                            classes={classes}
                            topRatingTable={this.state.topRatingTable}
                        />
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(dashboardStyle)(Dashboard)
