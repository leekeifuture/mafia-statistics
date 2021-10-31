import Icon from '@material-ui/core/Icon'
import React from 'react'
import {NavLink} from 'react-router-dom'
import Card from '../../components/Card/Card'
import CardFooter from '../../components/Card/CardFooter'
import CardHeader from '../../components/Card/CardHeader'
import CardIcon from '../../components/Card/CardIcon'
import GridItem from '../../components/Grid/GridItem'
import {getMention} from '../../util/util'

const RecordsComponent = (props) => {
    return (<>
        <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
                <CardHeader color="success" stats icon>
                    <CardIcon color="success">
                        <i className="fas fa-trophy" />
                    </CardIcon>
                    <p className={props.classes.cardCategory}>
                        Максимальная серия побед
                    </p>
                    <h3 className={props.classes.cardTitle}>
                        <NavLink
                            to={`/admin/players/${props.state.winSeriesPlayerId}`}>
                            <small>{getMention(props.state.gender) + ' '}</small>
                            {props.state.winSeriesPlayerNickname}
                        </NavLink>
                    </h3>
                </CardHeader>
                <CardFooter stats>
                    <div className={props.classes.stats}>
                        Побед подряд {props.state.winSeriesGames}
                    </div>
                </CardFooter>
            </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
                <CardHeader color="danger" stats icon>
                    <CardIcon color="danger">
                        <i className="fas fa-shield-alt" />
                    </CardIcon>
                    <p className={props.classes.cardCategory}>
                        Максимальная серия поражений
                    </p>
                    <h3 className={props.classes.cardTitle}>
                        <NavLink
                            to={`/admin/players/${props.state.defeatSeriesPlayerId}`}>
                            <small>{getMention(props.state.gender) + ' '}</small>
                            {props.state.defeatSeriesPlayerNickname}
                        </NavLink>
                    </h3>
                </CardHeader>
                <CardFooter stats>
                    <div className={props.classes.stats}>
                        Поражений подряд {props.state.defeatSeriesGames}
                    </div>
                </CardFooter>
            </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
                <CardHeader color="info" stats icon>
                    <CardIcon color="info">
                        <Icon>info_outline</Icon>
                    </CardIcon>
                    <p className={props.classes.cardCategory}>
                        Максимальный процент посещаемости
                    </p>
                    <h3 className={props.classes.cardTitle}>
                        <NavLink
                            to={`/admin/players/${props.state.visitingSeriesPlayerId}`}>
                            <small>{getMention(props.state.gender) + ' '}</small>
                            {props.state.visitingSeriesPlayerNickname}
                        </NavLink>
                    </h3>
                </CardHeader>
                <CardFooter stats>
                    <div className={props.classes.stats}>
                        Посещаемость {props.state.visitingSeriesPercent}%
                    </div>
                </CardFooter>
            </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
                <CardHeader color="warning" stats icon>
                    <CardIcon color="warning">
                        <i className="fas fa-skull-crossbones" />
                    </CardIcon>
                    <p className={props.classes.cardCategory}>
                        Максимальный процент первого отстрела
                    </p>
                    <h3 className={props.classes.cardTitle}>
                        <NavLink
                            to={`/admin/players/${props.state.firstShootingSeriesPlayerId}`}>
                            <small>{getMention(props.state.gender) + ' '}</small>
                            {props.state.firstShootingSeriesPlayerNickname}
                        </NavLink>
                    </h3>
                </CardHeader>
                <CardFooter stats>
                    <div className={props.classes.stats}>
                        {props.state.firstShootingSeriesPercent}%
                        первого отстрела
                    </div>
                </CardFooter>
            </Card>
        </GridItem>
    </>)
}

export default RecordsComponent
