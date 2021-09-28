import Icon from '@material-ui/core/Icon'
import Store from '@material-ui/icons/Store'
import Warning from '@material-ui/icons/Warning'
import React from 'react'
import Card from '../../components/Card/Card'
import CardFooter from '../../components/Card/CardFooter'
import CardHeader from '../../components/Card/CardHeader'
import CardIcon from '../../components/Card/CardIcon'
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
import Danger from '../../components/Typography/Danger'

const RecordsComponent = (props) => {
    return (
        <GridContainer>
            <GridItem xs={12} sm={6} md={6} lg={3}>
                <Card>
                    <CardHeader color="warning" stats icon>
                        <CardIcon color="warning">
                            <Icon>content_copy</Icon>
                        </CardIcon>
                        <p className={props.classes.cardCategory}>
                            Максимальная серия побед
                        </p>
                        <h3 className={props.classes.cardTitle}>
                            <small>г-н</small> Старый
                        </h3>
                    </CardHeader>
                    <CardFooter stats>
                        <div className={props.classes.stats}>
                            <Danger>
                                <Warning />
                            </Danger>
                            <a href=""
                               onClick={e => e.preventDefault()}>
                                15 побед подряд
                            </a>
                        </div>
                    </CardFooter>
                </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={3}>
                <Card>
                    <CardHeader color="success" stats icon>
                        <CardIcon color="success">
                            <Store />
                        </CardIcon>
                        <p className={props.classes.cardCategory}>
                            Максимальная серия поражений
                        </p>
                        <h3 className={props.classes.cardTitle}>
                            <small>г-н</small> Колобок
                        </h3>
                    </CardHeader>
                    <CardFooter stats>
                        <div className={props.classes.stats}>
                            <Danger>
                                <Warning />
                            </Danger>
                            <a href=""
                               onClick={e => e.preventDefault()}>
                                15 поражений подряд
                            </a>
                        </div>
                    </CardFooter>
                </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={3}>
                <Card>
                    <CardHeader color="danger" stats icon>
                        <CardIcon color="danger">
                            <Icon>info_outline</Icon>
                        </CardIcon>
                        <p className={props.classes.cardCategory}>
                            Максимальный процент посещаемости
                        </p>
                        <h3 className={props.classes.cardTitle}>
                            <small>г-жа</small> Марсианка
                        </h3>
                    </CardHeader>
                    <CardFooter stats>
                        <div className={props.classes.stats}>
                            <Danger>
                                <Warning />
                            </Danger>
                            <a href=""
                               onClick={e => e.preventDefault()}>
                                Посещаемость 100%
                            </a>
                        </div>
                    </CardFooter>
                </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={3}>
                <Card>
                    <CardHeader color="info" stats icon>
                        <CardIcon color="info">
                            <i className="fab fa-twitter" />
                        </CardIcon>
                        <p className={props.classes.cardCategory}>
                            Максимальный процент первого отстрела
                        </p>
                        <h3 className={props.classes.cardTitle}>
                            <small>г-н</small> Валет
                        </h3>
                    </CardHeader>
                    <CardFooter stats>
                        <div className={props.classes.stats}>
                            <Danger>
                                <Warning />
                            </Danger>
                            <a href=""
                               onClick={e => e.preventDefault()}>
                                100% первого отстрела
                            </a>
                        </div>
                    </CardFooter>
                </Card>
            </GridItem>
        </GridContainer>
    )
}

export default RecordsComponent
