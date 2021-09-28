import withStyles from '@material-ui/core/styles/withStyles'
import Language from '@material-ui/icons/Language'
import dashboardStyle
    from 'assets/jss/material-dashboard-pro-react/views/dashboardStyle'
import Card from 'components/Card/Card.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import CardIcon from 'components/Card/CardIcon.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import PropTypes from 'prop-types'
import React from 'react'
import Table from '../../components/Table/Table'
import RecordsComponent from './RecordsComponent'

class StatisticsDashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const tableHead = [
            'Место',
            'Никнейм',
            'Кол-во игр'
        ]
        const tableData = [
            [
                '#1',
                'г-н Плесень',
                1795
            ],
            [
                '#2',
                'г-н БИ-2',
                1407
            ],
            [
                '#3',
                'г-н Лютер',
                1362
            ],
            [
                '#4',
                'г-н Гагарин',
                1246
            ],
            [
                '#5',
                'г-н Ауткаст',
                1236
            ],
            [
                '#6',
                'г-жа Ягодка',
                1221
            ],
            [
                '#7',
                'г-жа Andolini',
                1126
            ],
            [
                '#8',
                'г-н Шкипер',
                1114
            ],
            [
                '#9',
                'г-жа Ultimate',
                1064
            ],
            [
                '#10',
                'г-н Партизан',
                1038
            ],
            [
                '#11',
                'г-н ГитлерОк',
                974
            ],
            [
                '#12',
                'г-н Белка',
                949
            ],
            [
                '#13',
                'г-н Бродяга',
                947
            ],
            [
                '#14',
                'г-н Эльф',
                837
            ],
            [
                '#15',
                'г-н Старый',
                828
            ]
        ]

        const {classes} = this.props
        return (
            <div>
                <RecordsComponent classes={classes} />
                <GridContainer>
                    <GridItem xs={6}>
                        <Card>
                            <CardHeader color="success" icon>
                                <CardIcon color="success">
                                    <Language />
                                </CardIcon>
                                <h4 className={classes.cardIconTitle}>
                                    Топ по количеству игр
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
                    </GridItem>
                    <GridItem xs={6}>
                        <Card>
                            <CardHeader color="success" icon>
                                <CardIcon color="success">
                                    <Language />
                                </CardIcon>
                                <h4 className={classes.cardIconTitle}>
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
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}

StatisticsDashboard.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(dashboardStyle)(StatisticsDashboard)
