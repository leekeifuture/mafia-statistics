import ReactEcharts from 'echarts-for-react'
import React from 'react'
import {getSubtextDate} from '../../util/util'

const RolesHistoryStatisticsComponent = (props) => {
    const subtext = getSubtextDate(
        props.rolesHistoryStatistics.fromDate,
        props.rolesHistoryStatistics.toDate
    )

    const option = {
        title: {
            text: 'История вытянутых карт',
            subtext,
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            y: 'bottom'
        },
        series: [
            {
                name: 'Количество игр',
                type: 'pie',
                radius: '50%',
                data: [
                    {
                        value: props.rolesHistoryStatistics.gamesBlack,
                        name: 'Мафия'
                    },
                    {
                        value: props.rolesHistoryStatistics.gamesSheriff,
                        name: 'Шериф'
                    },
                    {
                        value: props.rolesHistoryStatistics.gamesDon,
                        name: 'Дон'
                    },
                    {
                        value: props.rolesHistoryStatistics.gamesRed,
                        name: 'Мирный'
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

    return (
        <ReactEcharts option={option} />
    )

}

export default RolesHistoryStatisticsComponent
