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
