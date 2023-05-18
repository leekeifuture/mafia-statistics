import {BarChart} from '@material-ui/icons'
import React from 'react'
import Card from '../../components/Card/Card'
import CardBody from '../../components/Card/CardBody'
import CardHeader from '../../components/Card/CardHeader'
import CardIcon from '../../components/Card/CardIcon'
import Clearfix from '../../components/Clearfix/Clearfix'
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
import RolesHistoryStatisticsComponent from './RolesHistoryStatisticsComponent'
import WinningHistoryStatisticsComponent
    from './WinningHistoryStatisticsComponent'

const RatingStatisticsComponent = props => {
    return (
        <GridItem xs={12} sm={12} md={9}>
            <Card>
                <CardHeader color="primary" icon>
                    <CardIcon color="primary">
                        <BarChart/>
                    </CardIcon>
                    <h4 className={props.classes.cardIconTitle}>
                        Статистика игрока
                    </h4>
                </CardHeader>
                <CardBody>
                    <GridContainer>
                        {props.rolesHistoryStatistics
                            ? (<RolesHistoryStatisticsComponent
                                rolesHistoryStatistics={props.rolesHistoryStatistics}
                            />)
                            : (<></>)}
                        {props.ratingStatistics
                            ? (<WinningHistoryStatisticsComponent
                                ratingStatistics={props.ratingStatistics}
                            />)
                            : (<></>)}
                    </GridContainer>
                    <Clearfix/>
                </CardBody>
            </Card>
        </GridItem>
    )
}

export default RatingStatisticsComponent
