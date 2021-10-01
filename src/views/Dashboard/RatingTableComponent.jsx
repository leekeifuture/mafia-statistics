import {Star} from '@material-ui/icons'
import React from 'react'
import Card from '../../components/Card/Card'
import CardBody from '../../components/Card/CardBody'
import CardHeader from '../../components/Card/CardHeader'
import CardIcon from '../../components/Card/CardIcon'
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
import Table from '../../components/Table/Table'

const RatingTableComponent = (props) => {
    const tableHead = [
        'Место',
        'Никнейм',
        'Рейтинг'
    ]
    const tableData = []

    props.topRatingTable.forEach((player, index) => {
        tableData.push([
            `#${index + 1}`,
            player.playerNickname,
            player.points
        ])
    })

    return (
        <Card>
            <CardHeader color="success" icon>
                <CardIcon color="success">
                    <Star />
                </CardIcon>
                <h4 className={props.classes.cardIconTitle}>
                    Рейтинговая таблица
                </h4>
            </CardHeader>
            <CardBody>
                <GridContainer justify="space-between">
                    <GridItem xs={12} sm={12} md={12}>
                        <Table
                            tableHead={tableHead}
                            tableData={tableData}
                        />
                    </GridItem>
                </GridContainer>
            </CardBody>
        </Card>
    )
}

export default RatingTableComponent
