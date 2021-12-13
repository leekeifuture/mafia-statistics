import ReactEcharts from 'echarts-for-react'
import React from 'react'
import GridItem from '../../components/Grid/GridItem'

const RolesHistoryStatisticsComponent = (props) => {
    const option = {
        title: {
            text: 'История вытянутых карт',
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
        <GridItem xs={12} sm={12} md={6}>
            <ReactEcharts option={option} />
        </GridItem>
    )

}

export default RolesHistoryStatisticsComponent
