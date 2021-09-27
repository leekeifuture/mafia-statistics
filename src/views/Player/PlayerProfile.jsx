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
import PlayerCardComponent from './PlayerCardComponent'
import RolesHistoryStatisticsComponent from './RolesHistoryStatisticsComponent'

class PlayerProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nickname: '',
            gamesTotal: 0,
            coupleStatistics: [],
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
                penaltyPoints: 0,
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
                                </h4>
                            </CardHeader>
                            <CardBody>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <RolesHistoryStatisticsComponent
                                            rolesHistoryStatistics={this.state.rolesHistoryStatistics}
                                        />
                                    </GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={6}>

                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>

                                    </GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={4}>

                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={4}>

                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={4}>

                                    </GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>

                                    </GridItem>
                                </GridContainer>
                                <Clearfix />
                            </CardBody>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}

export default withStyles(userProfileStyles)(PlayerProfile)
