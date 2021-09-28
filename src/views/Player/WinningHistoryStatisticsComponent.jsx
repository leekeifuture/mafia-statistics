import ReactEcharts from 'echarts-for-react'
import React from 'react'

const WinningHistoryStatisticsComponent = (props) => {
    const fromDate = new Date(props.ratingStatistics.fromDate)
    const toDate = new Date(props.ratingStatistics.toDate)

    const options = {year: 'numeric', month: 'long', day: 'numeric'}

    const strFromDate = fromDate.toLocaleDateString('ru', options)
    const strToDate = toDate.toLocaleDateString('ru', options)

    const option = {
        title: {
            text: 'История побед',
            subtext: `${strFromDate} - ${strToDate}`,
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
                name: 'Количество побед',
                type: 'pie',
                radius: '50%',
                data: [
                    {
                        value: props.ratingStatistics.gamesBlack,
                        name: 'Мафия'
                    },
                    {
                        value: props.ratingStatistics.gamesSheriff,
                        name: 'Шериф'
                    },
                    {
                        value: props.ratingStatistics.gamesDon,
                        name: 'Дон'
                    },
                    {
                        value: props.ratingStatistics.gamesRed,
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

export default WinningHistoryStatisticsComponent
