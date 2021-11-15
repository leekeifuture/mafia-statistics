import withStyles from '@material-ui/core/styles/withStyles'
import {BarChart} from '@material-ui/icons'
import userProfileStyles
    from 'assets/jss/material-dashboard-pro-react/views/userProfileStyles.jsx'
import Card from 'components/Card/Card.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import CardIcon from 'components/Card/CardIcon.jsx'
import Clearfix from 'components/Clearfix/Clearfix.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import React from 'react'
import {mafiaStatisticsApi} from '../../api/mafiaStatisticsApi'
import CoupleStatistics from './CoupleStatistics'
import PlayerCardComponent from './PlayerCardComponent'
import RolesHistoryStatisticsComponent from './RolesHistoryStatisticsComponent'
import SerialityStatistics from './seriality/SerialityStatistics'
import WinningHistoryStatisticsComponent
    from './WinningHistoryStatisticsComponent'

class PlayerProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: null,
            nickname: '',
            gamesTotal: 0,
            gender: '',
            photoUrl: '',
            roles: [],
            coupleStatistics: [{
                from_date: '',
                to_date: '',
                nicknameOfMafiaOne: '',
                nicknameOfMafiaTwo: '',
                percent_of_wins: 0,
                games: 0,
                wins: 0,
                percentOfWins: 0
            }],
            numbersStatistics: {
                fromDate: '',
                toDate: '',
                placeOne: {
                    gamesRed: 0,
                    gamesBlack: 0,
                    gamesDon: 0,
                    gamesSheriff: 0,
                    percentWinRed: 0,
                    percentWinBlack: 0
                },
                placeTwo: {
                    gamesRed: 0,
                    gamesBlack: 0,
                    gamesDon: 0,
                    gamesSheriff: 0,
                    percentWinRed: 0,
                    percentWinBlack: 0
                },
                placeThree: {
                    gamesRed: 0,
                    gamesBlack: 0,
                    gamesDon: 0,
                    gamesSheriff: 0,
                    percentWinRed: 0,
                    percentWinBlack: 0
                },
                placeFour: {
                    gamesRed: 0,
                    gamesBlack: 0,
                    gamesDon: 0,
                    gamesSheriff: 0,
                    percentWinRed: 0,
                    percentWinBlack: 0
                },
                placeFive: {
                    gamesRed: 0,
                    gamesBlack: 0,
                    gamesDon: 0,
                    gamesSheriff: 0,
                    percentWinRed: 0,
                    percentWinBlack: 0
                },
                placeSix: {
                    gamesRed: 0,
                    gamesBlack: 0,
                    gamesDon: 0,
                    gamesSheriff: 0,
                    percentWinRed: 0,
                    percentWinBlack: 0
                },
                placeSeven: {
                    gamesRed: 0,
                    gamesBlack: 0,
                    gamesDon: 0,
                    gamesSheriff: 0,
                    percentWinRed: 0,
                    percentWinBlack: 0
                },
                placeEight: {
                    gamesRed: 0,
                    gamesBlack: 0,
                    gamesDon: 0,
                    gamesSheriff: 0,
                    percentWinRed: 0,
                    percentWinBlack: 0
                },
                placeNine: {
                    gamesRed: 0,
                    gamesBlack: 0,
                    gamesDon: 0,
                    gamesSheriff: 0,
                    percentWinRed: 0,
                    percentWinBlack: 0
                },
                placeTen: {
                    gamesRed: 0,
                    gamesBlack: 0,
                    gamesDon: 0,
                    gamesSheriff: 0,
                    percentWinRed: 0,
                    percentWinBlack: 0
                }
            },
            ratingStatistics: {
                fromDate: '',
                toDate: '',
                bestMove: 0,
                gamesBlack: 0,
                gamesDon: 0,
                gamesRed: 0,
                gamesSheriff: 0,
                additionalPoints: 0,
                points: 0
            },
            rolesHistoryStatistics: {
                fromDate: '',
                toDate: '',
                gamesRed: 0,
                gamesBlack: 0,
                gamesDon: 0,
                gamesSheriff: 0,
                shooting: 0,
                percentSelectedRed: 0,
                percentSelectedBlack: 0,
                percentSelectedDon: 0,
                percentSelectedSheriff: 0,
                percentSelectedAllRed: 0,
                percentSelectedAllBlack: 0,
                percentWinningRed: 0,
                percentWinningBlack: 0,
                percentWinningDon: 0,
                percentWinningSheriff: 0,
                percentWinning: 0,
                percentWinningAllRed: 0,
                percentWinningAllBlack: 0,
                percentBestPlayer: 0,
                percentFirstShooting: 0
            },
            visitingStatistics: {
                fromDate: '',
                toDate: '',
                byMonday: 0,
                byTuesday: 0,
                byWednesday: 0,
                byThursday: 0,
                byFriday: 0,
                bySaturday: 0,
                bySunday: 0
            },
            serialityStatistics: {
                fromDate: '',
                toDate: '',
                maximumSeriesOfDefeat: 0,
                maximumSeriesOfWin: 0,
                successivelyLostByBlack: 0,
                successivelyLostByDon: 0,
                successivelyLostByRed: 0,
                successivelyLostBySheriff: 0,
                successivelyPlayedByBlack: 0,
                successivelyPlayedByDon: 0,
                successivelyPlayedByRed: 10,
                successivelyPlayedBySheriff: 0,
                successivelyWonByBlack: 0,
                successivelyWonByDon: 0,
                successivelyWonByRed: 0,
                successivelyWonBySheriff: 0
            }
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
        const {classes} = this.props
        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={3}>
                        <PlayerCardComponent
                            classes={classes}
                            state={this.state}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={9}>
                        <Card>
                            <CardHeader color="rose" icon>
                                <CardIcon color="rose">
                                    <BarChart />
                                </CardIcon>
                                <h4 className={classes.cardIconTitle}>
                                    Статистика игрока
                                    <small> - история из рейтинга</small>
                                </h4>
                            </CardHeader>
                            <CardBody>
                                <GridContainer>
                                    {this.state.rolesHistoryStatistics
                                        ? (<RolesHistoryStatisticsComponent
                                            rolesHistoryStatistics={this.state.rolesHistoryStatistics}
                                        />)
                                        : (<></>)}
                                    {this.state.ratingStatistics
                                        ? (<WinningHistoryStatisticsComponent
                                            ratingStatistics={this.state.ratingStatistics}
                                        />)
                                        : (<></>)}
                                </GridContainer>
                                <Clearfix />
                            </CardBody>
                        </Card>
                    </GridItem>
                    {this.state.serialityStatistics
                        ? (<SerialityStatistics
                            classes={classes}
                            serialityStatistics={this.state.serialityStatistics}
                        />)
                        : <></>}
                    {this.state.coupleStatistics && this.state.coupleStatistics.length > 0
                        ? (<CoupleStatistics
                            classes={classes}
                            nickname={this.state.nickname}
                            coupleStatistics={this.state.coupleStatistics}
                        />)
                        : <></>}

                </GridContainer>
            </div>
        )
    }
}

export default withStyles(userProfileStyles)(PlayerProfile)
