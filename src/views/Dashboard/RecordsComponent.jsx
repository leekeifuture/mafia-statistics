import Icon from '@material-ui/core/Icon'
import React from 'react'
import Card from '../../components/Card/Card'
import CardFooter from '../../components/Card/CardFooter'
import CardHeader from '../../components/Card/CardHeader'
import CardIcon from '../../components/Card/CardIcon'
import GridItem from '../../components/Grid/GridItem'

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
                        <small>г-н</small> Старый
                    </h3>
                </CardHeader>
                <CardFooter stats>
                    <div className={props.classes.stats}>
                        15 побед подряд
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
                        <small>г-н</small> Колобок
                    </h3>
                </CardHeader>
                <CardFooter stats>
                    <div className={props.classes.stats}>
                        15 поражений подряд
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
                        <small>г-жа</small> Марсианка
                    </h3>
                </CardHeader>
                <CardFooter stats>
                    <div className={props.classes.stats}>
                        Посещаемость 100%
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
                        <small>г-н</small> Валет
                    </h3>
                </CardHeader>
                <CardFooter stats>
                    <div className={props.classes.stats}>
                        100% первого отстрела
                    </div>
                </CardFooter>
            </Card>
        </GridItem>
    </>)
}

export default RecordsComponent
