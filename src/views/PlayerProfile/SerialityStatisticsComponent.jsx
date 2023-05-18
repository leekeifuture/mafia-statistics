import {Update} from '@material-ui/icons'
import ReactEcharts from 'echarts-for-react'
import React from 'react'
import Card from '../../components/Card/Card'
import CardBody from '../../components/Card/CardBody'
import CardHeader from '../../components/Card/CardHeader'
import CardIcon from '../../components/Card/CardIcon'
import Clearfix from '../../components/Clearfix/Clearfix'
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'

const SerialityStatisticsComponent = props => {
    const labelOption = {
        show: true,
        position: 'insideBottom',
        distance: 15,
        align: 'left',
        verticalAlign: 'middle',
        rotate: 90,
        formatter: '{c}  {name|{a}}',
        fontSize: 16,
        rich: {
            name: {}
        }
    }
    const option = {
        title: {
            text: '',
            left: 'center'
        },
        tooltip: {
            confine: true,
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: [
            {
                type: 'category',
                axisTick: {show: false},
                data: ['']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Красный',
                type: 'bar',
                barGap: 0,
                label: labelOption,
                emphasis: {
                    focus: 'series'
                },
                data: [],
                color: '#e66'
            },
            {
                name: 'Чёрный',
                type: 'bar',
                label: labelOption,
                emphasis: {
                    focus: 'series'
                },
                data: [],
                color: '#5470c6'
            },
            {
                name: 'Шериф',
                type: 'bar',
                label: labelOption,
                emphasis: {
                    focus: 'series'
                },
                data: [],
                color: '#91cc75'
            },
            {
                name: 'Дон',
                type: 'bar',
                label: labelOption,
                emphasis: {
                    focus: 'series'
                },
                data: [],
                color: '#fac858'
            }
        ]
    }

    let rolesPlayedOption = JSON.parse(JSON.stringify(option))
    rolesPlayedOption.title.text = 'Подряд сыгранных ролей'
    rolesPlayedOption.series[0].data = [props.serialityStatistics.successivelyPlayedByRed]
    rolesPlayedOption.series[1].data = [props.serialityStatistics.successivelyPlayedByBlack]
    rolesPlayedOption.series[2].data = [props.serialityStatistics.successivelyPlayedBySheriff]
    rolesPlayedOption.series[3].data = [props.serialityStatistics.successivelyPlayedByDon]

    let rolesWonOption = JSON.parse(JSON.stringify(option))
    rolesWonOption.title.text = 'Подряд выигранных ролей'
    rolesWonOption.series[0].data = [props.serialityStatistics.successivelyWonByRed]
    rolesWonOption.series[1].data = [props.serialityStatistics.successivelyWonByBlack]
    rolesWonOption.series[2].data = [props.serialityStatistics.successivelyWonBySheriff]
    rolesWonOption.series[3].data = [props.serialityStatistics.successivelyWonByDon]

    let rolesLostOption = JSON.parse(JSON.stringify(option))
    rolesLostOption.title.text = 'Подряд проигранных ролей'
    rolesLostOption.series[0].data = [props.serialityStatistics.successivelyLostByRed]
    rolesLostOption.series[1].data = [props.serialityStatistics.successivelyLostByBlack]
    rolesLostOption.series[2].data = [props.serialityStatistics.successivelyLostBySheriff]
    rolesLostOption.series[3].data = [props.serialityStatistics.successivelyLostByDon]

    return (
        <GridItem xs={12} sm={12} md={9}>
            <Card>
                <CardHeader color="primary" icon>
                    <CardIcon color="primary">
                        <Update/>
                    </CardIcon>
                    <h4 className={props.classes.cardIconTitle}>
                        Серийность
                    </h4>
                </CardHeader>
                <CardBody>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={4}>
                            <ReactEcharts option={rolesPlayedOption}/>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                            <ReactEcharts option={rolesWonOption}/>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                            <ReactEcharts option={rolesLostOption}/>
                        </GridItem>
                    </GridContainer>
                    <Clearfix/>
                </CardBody>
            </Card>
        </GridItem>
    )
}

export default SerialityStatisticsComponent
