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
    const winSeriesMention = getMention({gender: props.state.winSeriesPlayerGender})
    const defeatSeriesMention = getMention({gender: props.state.defeatSeriesPlayerGender})
    const visitingSeriesMention = getMention({gender: props.state.visitingSeriesPlayerGender})
    const firstShootingMention = getMention({gender: props.state.firstShootingSeriesPlayerGender})

    const wonByRedSeriesMention = getMention({gender: props.state.wonByRedSeriesPlayerGender})
    const wonByBlackSeriesMention = getMention({gender: props.state.wonByBlackSeriesPlayerGender})
    const wonBySheriffSeriesMention = getMention({gender: props.state.wonBySheriffSeriesPlayerGender})
    const wonByDonSeriesMention = getMention({gender: props.state.wonByDonSeriesPlayerGender})

    const lostByRedSeriesMention = getMention({gender: props.state.lostByRedSeriesPlayerGender})
    const lostByBlackSeriesMention = getMention({gender: props.state.lostByBlackSeriesPlayerGender})
    const lostBySheriffSeriesMention = getMention({gender: props.state.lostBySheriffSeriesPlayerGender})
    const lostByDonSeriesMention = getMention({gender: props.state.lostByDonSeriesPlayerGender})

    const playedByRedSeriesMention = getMention({gender: props.state.playedByRedSeriesPlayerGender})
    const playedByBlackSeriesMention = getMention({gender: props.state.playedByBlackSeriesPlayerGender})
    const playedBySheriffSeriesMention = getMention({gender: props.state.playedBySheriffSeriesPlayerGender})
    const playedByDonSeriesMention = getMention({gender: props.state.playedByDonSeriesPlayerGender})

    return (<>
        <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
                <CardHeader color="success" stats icon>
                    <CardIcon color="success">
                        <i className="fas fa-trophy"/>
                    </CardIcon>
                    <p className={props.classes.cardCategory}>
                        Максимальная серия побед
                    </p>
                    <h3 className={props.classes.cardTitle}>
                        <NavLink
                            to={`/statistics/players/${props.state.winSeriesPlayerId}`}>
                            <small>{winSeriesMention}</small>
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
                        <i className="fas fa-shield-alt"/>
                    </CardIcon>
                    <p className={props.classes.cardCategory}>
                        Максимальная серия поражений
                    </p>
                    <h3 className={props.classes.cardTitle}>
                        <NavLink
                            to={`/statistics/players/${props.state.defeatSeriesPlayerId}`}>
                            <small>{defeatSeriesMention}</small>
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
                <CardHeader color="warning" stats icon>
                    <CardIcon color="warning">
                        <i className="fas fa-skull-crossbones"/>
                    </CardIcon>
                    <p className={props.classes.cardCategory}>
                        Максимальный процент первого отстрела
                    </p>
                    <h3 className={props.classes.cardTitle}>
                        <NavLink
                            to={`/statistics/players/${props.state.firstShootingSeriesPlayerId}`}>
                            <small>{firstShootingMention}</small>
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
                            to={`/statistics/players/${props.state.visitingSeriesPlayerId}`}>
                            <small>{visitingSeriesMention}</small>
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
                <CardHeader color="success" stats icon>
                    <CardIcon color="success">
                        <i className="fas fa-thumbs-up"/>
                    </CardIcon>
                    <p className={props.classes.cardCategory}>
                        Максимальная серия выигранных красным
                    </p>
                    <h3 className={props.classes.cardTitle}>
                        <NavLink
                            to={`/statistics/players/${props.state.wonByRedSeriesPlayerId}`}>
                            <small>{wonByRedSeriesMention}</small>
                            {props.state.wonByRedSeriesPlayerNickname}
                        </NavLink>
                    </h3>
                </CardHeader>
                <CardFooter stats>
                    <div className={props.classes.stats}>
                        Игр подряд {props.state.wonByRedSeriesGames}
                    </div>
                </CardFooter>
            </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
                <CardHeader color="success" stats icon>
                    <CardIcon color="success">
                        <i className="fas fa-thumbs-down"/>
                    </CardIcon>
                    <p className={props.classes.cardCategory}>
                        Максимальная серия выигранных чёрным
                    </p>
                    <h3 className={props.classes.cardTitle}>
                        <NavLink
                            to={`/statistics/players/${props.state.wonByBlackSeriesPlayerId}`}>
                            <small>{wonByBlackSeriesMention}</small>
                            {props.state.wonByBlackSeriesPlayerNickname}
                        </NavLink>
                    </h3>
                </CardHeader>
                <CardFooter stats>
                    <div className={props.classes.stats}>
                        Игр подряд {props.state.wonByBlackSeriesGames}
                    </div>
                </CardFooter>
            </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
                <CardHeader color="success" stats icon>
                    <CardIcon color="success">
                        <i className="fas fa-american-sign-language-interpreting"/>
                    </CardIcon>
                    <p className={props.classes.cardCategory}>
                        Максимальная серия выигранных шерифом
                    </p>
                    <h3 className={props.classes.cardTitle}>
                        <NavLink
                            to={`/statistics/players/${props.state.wonBySheriffSeriesPlayerId}`}>
                            <small>{wonBySheriffSeriesMention}</small>
                            {props.state.wonBySheriffSeriesPlayerNickname}
                        </NavLink>
                    </h3>
                </CardHeader>
                <CardFooter stats>
                    <div className={props.classes.stats}>
                        Игр подряд {props.state.wonBySheriffSeriesGames}
                    </div>
                </CardFooter>
            </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
                <CardHeader color="success" stats icon>
                    <CardIcon color="success">
                        <i className="fas fa-user-secret"/>
                    </CardIcon>
                    <p className={props.classes.cardCategory}>
                        Максимальная серия выигранных доном
                    </p>
                    <h3 className={props.classes.cardTitle}>
                        <NavLink
                            to={`/statistics/players/${props.state.wonByDonSeriesPlayerId}`}>
                            <small>{wonByDonSeriesMention}</small>
                            {props.state.wonByDonSeriesPlayerNickname}
                        </NavLink>
                    </h3>
                </CardHeader>
                <CardFooter stats>
                    <div className={props.classes.stats}>
                        Игр подряд {props.state.wonByDonSeriesGames}
                    </div>
                </CardFooter>
            </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
                <CardHeader color="danger" stats icon>
                    <CardIcon color="danger">
                        <i className="fas fa-thumbs-up"/>
                    </CardIcon>
                    <p className={props.classes.cardCategory}>
                        Максимальная серия проигранных красным
                    </p>
                    <h3 className={props.classes.cardTitle}>
                        <NavLink
                            to={`/statistics/players/${props.state.lostByRedSeriesPlayerId}`}>
                            <small>{lostByRedSeriesMention}</small>
                            {props.state.lostByRedSeriesPlayerNickname}
                        </NavLink>
                    </h3>
                </CardHeader>
                <CardFooter stats>
                    <div className={props.classes.stats}>
                        Игр подряд {props.state.lostByRedSeriesGames}
                    </div>
                </CardFooter>
            </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
                <CardHeader color="danger" stats icon>
                    <CardIcon color="danger">
                        <i className="fas fa-thumbs-down"/>
                    </CardIcon>
                    <p className={props.classes.cardCategory}>
                        Максимальная серия проигранных чёрным
                    </p>
                    <h3 className={props.classes.cardTitle}>
                        <NavLink
                            to={`/statistics/players/${props.state.lostByBlackSeriesPlayerId}`}>
                            <small>{lostByBlackSeriesMention}</small>
                            {props.state.lostByBlackSeriesPlayerNickname}
                        </NavLink>
                    </h3>
                </CardHeader>
                <CardFooter stats>
                    <div className={props.classes.stats}>
                        Игр подряд {props.state.lostByBlackSeriesGames}
                    </div>
                </CardFooter>
            </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
                <CardHeader color="danger" stats icon>
                    <CardIcon color="danger">
                        <i className="fas fa-american-sign-language-interpreting"/>
                    </CardIcon>
                    <p className={props.classes.cardCategory}>
                        Максимальная серия проигранных шерифом
                    </p>
                    <h3 className={props.classes.cardTitle}>
                        <NavLink
                            to={`/statistics/players/${props.state.lostBySheriffSeriesPlayerId}`}>
                            <small>{lostBySheriffSeriesMention}</small>
                            {props.state.lostBySheriffSeriesPlayerNickname}
                        </NavLink>
                    </h3>
                </CardHeader>
                <CardFooter stats>
                    <div className={props.classes.stats}>
                        Игр подряд {props.state.lostBySheriffSeriesGames}
                    </div>
                </CardFooter>
            </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
                <CardHeader color="danger" stats icon>
                    <CardIcon color="danger">
                        <i className="fas fa-user-secret"/>
                    </CardIcon>
                    <p className={props.classes.cardCategory}>
                        Максимальная серия проигранных доном
                    </p>
                    <h3 className={props.classes.cardTitle}>
                        <NavLink
                            to={`/statistics/players/${props.state.lostByDonSeriesPlayerId}`}>
                            <small>{lostByDonSeriesMention}</small>
                            {props.state.lostByDonSeriesPlayerNickname}
                        </NavLink>
                    </h3>
                </CardHeader>
                <CardFooter stats>
                    <div className={props.classes.stats}>
                        Игр подряд {props.state.lostByDonSeriesGames}
                    </div>
                </CardFooter>
            </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
                <CardHeader color="info" stats icon>
                    <CardIcon color="info">
                        <i className="fas fa-thumbs-up"/>
                    </CardIcon>
                    <p className={props.classes.cardCategory}>
                        Максимальная серия сыгранных красным
                    </p>
                    <h3 className={props.classes.cardTitle}>
                        <NavLink
                            to={`/statistics/players/${props.state.playedByRedSeriesPlayerId}`}>
                            <small>{playedByRedSeriesMention}</small>
                            {props.state.playedByRedSeriesPlayerNickname}
                        </NavLink>
                    </h3>
                </CardHeader>
                <CardFooter stats>
                    <div className={props.classes.stats}>
                        Игр подряд {props.state.playedByRedSeriesGames}
                    </div>
                </CardFooter>
            </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
                <CardHeader color="info" stats icon>
                    <CardIcon color="info">
                        <i className="fas fa-thumbs-down"/>
                    </CardIcon>
                    <p className={props.classes.cardCategory}>
                        Максимальная серия сыгранных чёрным
                    </p>
                    <h3 className={props.classes.cardTitle}>
                        <NavLink
                            to={`/statistics/players/${props.state.playedByBlackSeriesPlayerId}`}>
                            <small>{playedByBlackSeriesMention}</small>
                            {props.state.playedByBlackSeriesPlayerNickname}
                        </NavLink>
                    </h3>
                </CardHeader>
                <CardFooter stats>
                    <div className={props.classes.stats}>
                        Игр подряд {props.state.playedByBlackSeriesGames}
                    </div>
                </CardFooter>
            </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
                <CardHeader color="info" stats icon>
                    <CardIcon color="info">
                        <i className="fas fa-american-sign-language-interpreting"/>
                    </CardIcon>
                    <p className={props.classes.cardCategory}>
                        Максимальная серия сыгранных шерифом
                    </p>
                    <h3 className={props.classes.cardTitle}>
                        <NavLink
                            to={`/statistics/players/${props.state.playedBySheriffSeriesPlayerId}`}>
                            <small>{playedBySheriffSeriesMention}</small>
                            {props.state.playedBySheriffSeriesPlayerNickname}
                        </NavLink>
                    </h3>
                </CardHeader>
                <CardFooter stats>
                    <div className={props.classes.stats}>
                        Игр подряд {props.state.playedBySheriffSeriesGames}
                    </div>
                </CardFooter>
            </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
                <CardHeader color="info" stats icon>
                    <CardIcon color="info">
                        <i className="fas fa-user-secret"/>
                    </CardIcon>
                    <p className={props.classes.cardCategory}>
                        Максимальная серия сыгранных доном
                    </p>
                    <h3 className={props.classes.cardTitle}>
                        <NavLink
                            to={`/statistics/players/${props.state.playedByDonSeriesPlayerId}`}>
                            <small>{playedByDonSeriesMention}</small>
                            {props.state.playedByDonSeriesPlayerNickname}
                        </NavLink>
                    </h3>
                </CardHeader>
                <CardFooter stats>
                    <div className={props.classes.stats}>
                        Игр подряд {props.state.playedByDonSeriesGames}
                    </div>
                </CardFooter>
            </Card>
        </GridItem>
    </>)
}

export default RecordsComponent
