import withStyles from '@material-ui/core/styles/withStyles'
import dashboardStyle
    from 'assets/jss/material-dashboard-pro-react/views/dashboardStyle'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import PropTypes from 'prop-types'
import React from 'react'
import {trackPromise} from 'react-promise-tracker'
import {mafiaStatisticsApi} from '../../api/mafiaStatisticsApi'
import LoadingIndicator
    from '../../components/LoadingIndicator/LoadingIndicator'
import RatingTableComponent from './RatingTableComponent'
import RecordsComponent from './RecordsComponent'
import TopGamesTableComponent from './TopGamesTableComponent'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            winSeriesPlayerId: '',
            winSeriesPlayerGender: '',
            winSeriesPlayerNickname: '',
            winSeriesGames: 0,
            defeatSeriesPlayerId: '',
            defeatSeriesPlayerGender: '',
            defeatSeriesPlayerNickname: '',
            defeatSeriesGames: 0,
            visitingSeriesPlayerId: '',
            visitingSeriesPlayerGender: '',
            visitingSeriesPlayerNickname: '',
            visitingSeriesPercent: 0,
            firstShootingSeriesPlayerId: '',
            firstShootingSeriesPlayerGender: '',
            firstShootingSeriesPlayerNickname: '',
            firstShootingSeriesPercent: 0,
            topGamesTable: [],
            topRatingTable: [],
            isLoading: true
        }
    }

    componentDidMount() {
        trackPromise(
            mafiaStatisticsApi.getDashboardInfo()
                .then(data => {
                        this.setState(data)
                    }, error => {
                        console.error(error)
                    }
                )
        ).then(r => this.setState({isLoading: false}))
    }

    render() {
        const {classes} = this.props
        return (<>
                {this.state.isLoading
                    ? <LoadingIndicator />
                    : (<div>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12} lg={12}>
                                <h2 style={{
                                    marginTop: '5vh',
                                    marginBottom: '30px',
                                    textAlign: 'center'
                                }}><b>
                                    Статистика всего что есть в клубе игры в
                                    Мафию - Ничего Личного.
                                </b></h2>
                                <h5 style={{
                                    fontSize: '18px',
                                    textAlign: 'center'
                                }}>
                                    Этот сайт даст вам лучшее представление о
                                    статистике клуба и обо всех игроках
                                    участвующих в нём.
                                </h5>
                            </GridItem>
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
                        <GridContainer>
                            <RecordsComponent
                                classes={classes}
                                state={this.state}
                            />
                        </GridContainer>
                    </div>)}
            </>
        )
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(dashboardStyle)(Dashboard)
