import React from 'react'
import Table from '../../../components/Table/Table'

const RolesLost = props => {
    const tableHead = [
        'Роль',
        'Количество игр'
    ]
    const tableData = [
        ['Мирный (включая шерифа)', props.serialityStatistics.successivelyLostByRed],
        ['Шериф', props.serialityStatistics.successivelyLostBySheriff],
        ['Мафия (включая дона)', props.serialityStatistics.successivelyLostByBlack],
        ['Дон', props.serialityStatistics.successivelyLostByDon]
    ]

    return (
        <>
            <h4>Подряд проигранных ролей</h4>
            <Table
                tableHead={tableHead}
                tableData={tableData}
            />
        </>
    )
}

export default RolesLost
