import {Update} from '@material-ui/icons'
import React from 'react'
import Card from '../../../components/Card/Card'
import CardBody from '../../../components/Card/CardBody'
import CardHeader from '../../../components/Card/CardHeader'
import CardIcon from '../../../components/Card/CardIcon'
import Clearfix from '../../../components/Clearfix/Clearfix'
import GridContainer from '../../../components/Grid/GridContainer'
import GridItem from '../../../components/Grid/GridItem'
import {getSubtextDate} from '../../../util/util'
import RolesLost from './RolesLost'
import RolesPlayed from './RolesPlayed'
import RolesWon from './RolesWon'

const SerialityStatistics = props => {
    const serialityStatisticsSubtext = getSubtextDate(
        props.serialityStatistics.fromDate,
        props.serialityStatistics.toDate
    )

    return (
        <GridItem xs={12} sm={12} md={9}>
            <Card>
                <CardHeader color="primary" icon>
                    <CardIcon color="primary">
                        <Update />
                    </CardIcon>
                    <h4 className={props.classes.cardIconTitle}>
                        Серийность
                        <small> - {serialityStatisticsSubtext}</small>
                    </h4>
                </CardHeader>
                <CardBody>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={4}>
                            <RolesPlayed
                                serialityStatistics={props.serialityStatistics}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                            <RolesWon
                                serialityStatistics={props.serialityStatistics}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                            <RolesLost
                                serialityStatistics={props.serialityStatistics}
                            />
                        </GridItem>
                    </GridContainer>
                    <Clearfix />
                </CardBody>
            </Card>
        </GridItem>
    )
}

export default SerialityStatistics
