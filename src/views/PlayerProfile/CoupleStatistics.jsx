import {SupervisorAccount} from '@material-ui/icons'
import React from 'react'
import Card from '../../components/Card/Card'
import CardBody from '../../components/Card/CardBody'
import CardHeader from '../../components/Card/CardHeader'
import CardIcon from '../../components/Card/CardIcon'
import Clearfix from '../../components/Clearfix/Clearfix'
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
import Table from '../../components/Table/Table'
import {getSubtextDate} from '../../util/util'

const CoupleStatistics = props => {
    const tableHead = [
        'Никнейм',
        'Игр',
        'Побед',
        'Процент побед'
    ]
    const tableData = props.coupleStatistics.map(row => {
        const nickname = row.nicknameOfMafiaOne === props.nickname
            ? row.nicknameOfMafiaTwo
            : row.nicknameOfMafiaOne
        return [
            nickname,
            row.games,
            row.wins,
            row.percentOfWins + '%'
        ]
    })

    const minDate = props.coupleStatistics.map(row => row.fromDate).sort((a, b) => {
        return new Date(a) - new Date(b)
    })
    const maxDate = props.coupleStatistics.map(row => row.toDate).sort((a, b) => {
        return new Date(a) - new Date(b)
    })

    const coupleStatisticsSubtext = getSubtextDate(
        minDate[0],
        maxDate[maxDate.length - 1]
    )

    return (
        <GridItem xs={12} sm={12} md={12}>
            <Card>
                <CardHeader color="rose" icon>
                    <CardIcon color="rose">
                        <SupervisorAccount />
                    </CardIcon>
                    <h4 className={props.classes.cardIconTitle}>
                        Лучшие мафиозные пары
                        <small> - {coupleStatisticsSubtext}</small>
                    </h4>
                </CardHeader>
                <CardBody>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                            <Table
                                tableHead={tableHead}
                                tableData={tableData}
                            />
                        </GridItem>
                    </GridContainer>
                    <Clearfix />
                </CardBody>
            </Card>
        </GridItem>
    )
}

export default CoupleStatistics
