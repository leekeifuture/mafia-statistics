import Language from '@material-ui/icons/Language'
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

const TopGamesTableComponent = (props) => {
    const tableHead = [
        'Место',
        'Никнейм',
        'Кол-во игр'
    ]
    const tableData = []

    props.topGamesTable.forEach((player, index) => {
        const mention = getMention(player)

        tableData.push([
            `#${index + 1}`,
            (<NavLink style={{color: 'black'}}
                      to={`/statistics/players/${player.playerId}`}>{
                mention + player.playerNickname
            }</NavLink>),
            player.gamesTotal
        ])
    })

    return (
        <Card>
            <CardHeader color="success" icon>
                <CardIcon color="success">
                    <Language/>
                </CardIcon>
                <h4 className={props.classes.cardIconTitle}>
                    Топ по количеству игр
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

export default TopGamesTableComponent
