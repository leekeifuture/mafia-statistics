import {Star} from '@material-ui/icons'
import React from 'react'
import {NavLink} from 'react-router-dom'
import Card from '../../components/Card/Card'
import CardBody from '../../components/Card/CardBody'
import CardHeader from '../../components/Card/CardHeader'
import CardIcon from '../../components/Card/CardIcon'
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
import Table from '../../components/Table/Table'
import {getMention} from '../../util/util'

const RatingTableComponent = (props) => {
    const tableHead = [
        'Место',
        'Никнейм',
        'Рейтинг'
    ]
    const tableData = []

    props.topRatingTable.forEach((player, index) => {
        const mention = getMention(player)

        const ratingPoints = player.points
            ? player.points.toFixed(1)
            : 0

        tableData.push([
            `#${index + 1}`,
            (<NavLink style={{color: 'black'}}
                      to={`/statistics/players/${player.playerId}`}>{
                mention + player.playerNickname
            }</NavLink>),
            ratingPoints
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
                    <small> - за всё время</small>
                </h4>
            </CardHeader>
            <CardBody>
                <GridContainer justifyContent="space-between">
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
