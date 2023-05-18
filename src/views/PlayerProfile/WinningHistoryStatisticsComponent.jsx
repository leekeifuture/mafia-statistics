import ReactEcharts from 'echarts-for-react'
import React from 'react'
import GridItem from '../../components/Grid/GridItem'

const WinningHistoryStatisticsComponent = (props) => {
    const option = {
        title: {
            text: 'История побед',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: params =>
                `${params.seriesName}<br />
              ${params.marker} ${params.name}: <b>${params.data.value} (${params.percent}%)</b>`
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            y: 'bottom'
        },
        series: [
            {
                name: 'Количество побед',
                type: 'pie',
                radius: '50%',
                data: [
                    {
                        value: props.ratingStatistics.gamesBlack,
                        name: 'Мафия',
                        label: {formatter: '{c}'}
                    },
                    {
                        value: props.ratingStatistics.gamesSheriff,
                        name: 'Шериф',
                        label: {formatter: '{c}'}
                    },
                    {
                        value: props.ratingStatistics.gamesDon,
                        name: 'Дон',
                        label: {formatter: '{c}'}
                    },
                    {
                        value: props.ratingStatistics.gamesRed,
                        name: 'Мирный',
                        label: {formatter: '{c}'}
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
            <ReactEcharts option={option}/>
        </GridItem>
    )

}

export default WinningHistoryStatisticsComponent
