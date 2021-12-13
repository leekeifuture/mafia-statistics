import {SupervisorAccount} from '@material-ui/icons'
import ReactEcharts from 'echarts-for-react'
import React from 'react'
import Card from '../../components/Card/Card'
import CardBody from '../../components/Card/CardBody'
import CardHeader from '../../components/Card/CardHeader'
import CardIcon from '../../components/Card/CardIcon'
import Clearfix from '../../components/Clearfix/Clearfix'
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
import {getMention} from '../../util/util'

const CoupleStatistics = props => {
    const children = props.coupleStatistics.map(row => ({
        name: row.couplePlayer.nickname,
        gender: row.couplePlayer.gender,
        games: row.games,
        wins: row.wins,
        percentOfWins: row.percentOfWins
    }))

    const playerMention = getMention(props)
    const data = {
        name: playerMention + ' ' + props.nickname,
        gender: props.gender,
        children
    }

    const option = {
        title: {
            text: 'Лучшие мафиозные пары',
            left: 'center'
        },
        tooltip: {
            confine: true,
            trigger: 'item',
            triggerOn: 'mousemove',
            formatter: params => {
                const mentionOne = getMention(props)
                const mentionTwo = getMention(params.data)

                if (params.data.name === mentionOne + ' ' + props.nickname) {
                    return params.data.name
                }

                let result = `<div><b>
                                    Мафиозная пара
                                    <small>${mentionOne}</small> ${props.nickname} и
                                    <small>${mentionTwo}</small> ${params.data.name}:
                              </b></div>`
                result += `<ul style="margin-top: 0; margin-bottom: 0;">
                              <li>игр: ${params.data.games}</li>
                              <li>побед: ${params.data.wins}</li>
                              <li>процент побед: ${params.data.percentOfWins}%</li>
                          </ul>`

                return result
            }
        },
        series: [
            {
                type: 'tree',
                data: [data],
                layout: 'radial',
                symbol: 'emptyCircle',
                symbolSize: 10,
                animationDurationUpdate: 750,
                emphasis: {
                    focus: 'descendant'
                },
                label: {
                    fontSize: 12,
                    rotate: 0,
                    position: 'top',
                    verticalAlign: 'middle',
                    align: 'middle'
                },
                leaves: {
                    label: {
                        formatter: params => {
                            const mention = getMention(params.data)
                            const nickname = `${mention} ${params.name}`

                            return params.data.percentOfWins
                                ? nickname + ` (${params.data.percentOfWins}%)`
                                : params.name
                        },
                        rotate: 0,
                        position: 'top',
                        verticalAlign: 'middle',
                        align: 'middle'
                    }
                }
            }
        ]
    }

    return (
        <GridItem xs={12} sm={12} md={3}>
            <Card>
                <CardHeader color="primary" icon>
                    <CardIcon color="primary">
                        <SupervisorAccount />
                    </CardIcon>
                    <h4 className={props.classes.cardIconTitle}>
                        Парная игра
                    </h4>
                </CardHeader>
                <CardBody>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                            <ReactEcharts option={option} />
                        </GridItem>
                    </GridContainer>
                    <Clearfix />
                </CardBody>
            </Card>
        </GridItem>
    )
}

export default CoupleStatistics
