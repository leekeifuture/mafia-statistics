import React from 'react'
import Table from '../../../components/Table/Table'

const RolesWon = props => {
    const tableHead = [
        'Роль',
        'Количество игр'
    ]
    const tableData = [
        ['Мирный (включая шерифа)', props.serialityStatistics.successivelyWonByRed],
        ['Шериф', props.serialityStatistics.successivelyWonBySheriff],
        ['Мафия (включая дона)', props.serialityStatistics.successivelyWonByBlack],
        ['Дон', props.serialityStatistics.successivelyWonByDon]
    ]

    return (
        <>
            <h4>Подряд выигранных ролей</h4>
            <Table
                tableHead={tableHead}
                tableData={tableData}
            />
        </>
    )
}

export default RolesWon
