import withStyles from '@material-ui/core/styles/withStyles'
import {BarChart} from '@material-ui/icons'
import avatar from 'assets/img/faces/marc.jpg'

import userProfileStyles
    from 'assets/jss/material-dashboard-pro-react/views/userProfileStyles.jsx'
import Card from 'components/Card/Card.jsx'
import CardAvatar from 'components/Card/CardAvatar.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import CardIcon from 'components/Card/CardIcon.jsx'
import Clearfix from 'components/Clearfix/Clearfix.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'

import ReactEcharts from 'echarts-for-react'
import React from 'react'
import {mafiaStatisticsApi} from '../../api/mafiaStatisticsApi'

class PlayerProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nickname: '',
            gamesTotal: 0,
            coupleStatistics: [],
            numbersStatistics: {},
            ratingStatistics: {},
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
        const fromDate = new Date(this.state.rolesHistoryStatistics.fromDate)
        const toDate = new Date(this.state.rolesHistoryStatistics.toDate)

        const options = {year: 'numeric', month: 'long', day: 'numeric'}

        const strFromDate = fromDate.toLocaleDateString('ru', options)
        const strToDate = toDate.toLocaleDateString('ru', options)

        const option = {
            title: {
                text: 'История вытянутых карт',
                subtext: `${strFromDate} - ${strToDate}`,
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left'
            },
            series: [
                {
                    name: 'Количество игр',
                    type: 'pie',
                    radius: '50%',
                    data: [
                        {
                            value: this.state.rolesHistoryStatistics.percentSelectedBlack,
                            name: 'Чёрный'
                        },
                        {
                            value: this.state.rolesHistoryStatistics.percentSelectedSheriff,
                            name: 'Шериф'
                        },
                        {
                            value: this.state.rolesHistoryStatistics.percentSelectedDon,
                            name: 'Дон'
                        },
                        {
                            value: this.state.rolesHistoryStatistics.percentSelectedRed,
                            name: 'Красный'
                        }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }

        const {classes} = this.props
        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={3}>
                        <Card profile>
                            <CardAvatar profile>
                                <a href=""
                                   onClick={e => e.preventDefault()}>
                                    <img src={avatar} alt="..." />
                                </a>
                            </CardAvatar>
                            <CardBody profile>
                                <h6 className={classes.cardCategory}
                                    style={{
                                        display: 'inline',
                                        textTransform: 'lowercase'
                                    }}
                                >
                                    г-н {' '}
                                </h6>
                                <h4 className={classes.cardTitle}
                                    style={{display: 'inline'}}
                                >
                                    {this.state.nickname}
                                </h4>
                                <hr />
                                <p className={classes.description}>
                                    Игры сыграно: {this.state.gamesTotal}
                                </p>
                            </CardBody>
                        </Card>
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
                                        <ReactEcharts option={option} />
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
