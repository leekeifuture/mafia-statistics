import ReactEcharts from 'echarts-for-react'
import React from 'react'

const RolesHistoryStatisticsComponent = (props) => {
    const fromDate = new Date(props.rolesHistoryStatistics.fromDate)
    const toDate = new Date(props.rolesHistoryStatistics.toDate)

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
            x: 'left',
            y: 'bottom',
        },
        series: [
            {
                name: 'Количество игр',
                type: 'pie',
                radius: '50%',
                data: [
                    {
                        value: props.rolesHistoryStatistics.percentSelectedBlack,
                        name: 'Мафия'
                    },
                    {
                        value: props.rolesHistoryStatistics.percentSelectedSheriff,
                        name: 'Шериф'
                    },
                    {
                        value: props.rolesHistoryStatistics.percentSelectedDon,
                        name: 'Дон'
                    },
                    {
                        value: props.rolesHistoryStatistics.percentSelectedRed,
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
