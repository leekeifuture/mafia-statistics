import withStyles from '@material-ui/core/styles/withStyles'
import userProfileStyles
    from 'assets/jss/material-dashboard-pro-react/views/userProfileStyles.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import React from 'react'
import {trackPromise} from 'react-promise-tracker'
import {mafiaStatisticsApi, utilApi} from '../../api/mafiaStatisticsApi'
import defaultAvatar from '../../assets/img/default-avatar.png'
import LoadingIndicator
    from '../../components/LoadingIndicator/LoadingIndicator'
import CoupleStatistics from './CoupleStatistics'
import PlayerCardComponent from './PlayerCardComponent'
import RatingStatistics from './RatingStatistics'
import SerialityStatistics from './SerialityStatistics'

class PlayerProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            nickname: '',
            gamesTotal: 0,
            gender: '',
            photoUrl: defaultAvatar,
            roles: [],
            coupleStatistics: [{
                fromDate: '',
                toDate: '',
                couplePlayer: {
                    id: '',
                    nickname: '',
                    gamesTotal: 0,
                    gender: '',
                    photoUrl: '',
                    roles: []
                },
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
                gamesWon: 0,
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
                successivelyPlayedByRed: 0,
                successivelyPlayedBySheriff: 0,
                successivelyWonByBlack: 0,
                successivelyWonByDon: 0,
                successivelyWonByRed: 0,
                successivelyWonBySheriff: 0
            },
            isLoading: true
        }
    }

    getPlayer() {
        trackPromise(
            mafiaStatisticsApi.getPlayerById(this.props.match.params.id)
                .then(
                    data => {
                        utilApi.isImageExists(data.photoUrl).then(
                            data => {
                            }, error => {
                                this.setState({photoUrl: defaultAvatar})
                            }
                        )

                        this.setState(data)
                    },
                    error => this.props.history.push('/statistics/dashboard')
                )
        ).then(r => this.setState({isLoading: false}))
    }

    componentDidMount() {
        this.getPlayer()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.url !== this.props.location.pathname) {
            this.setState({isLoading: true})
            this.getPlayer()
        }
    }

    render() {
        const {classes} = this.props
        return (<>
            {this.state.isLoading
                ? <LoadingIndicator />
                : (<>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={3}>
                            <PlayerCardComponent
                                classes={classes}
                                state={this.state}
                            />
                        </GridItem>
                        {this.state.rolesHistoryStatistics || this.state.ratingStatistics
                            ? (<RatingStatistics
                                rolesHistoryStatistics={this.state.rolesHistoryStatistics}
                                ratingStatistics={this.state.ratingStatistics}
                                classes={classes}
                                state={this.state}
                            />)
                            : <></>}
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
                                gender={this.state.gender}
                                coupleStatistics={this.state.coupleStatistics}
                            />)
                            : <></>}
                    </GridContainer>
                </>)}
        </>)
    }
}

export default withStyles(userProfileStyles)(PlayerProfile)
