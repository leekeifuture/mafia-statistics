import React from 'react'
import Table from '../../../components/Table/Table'

const RolesPlayed = props => {
    const tableHead = [
        'Роль',
        'Количество игр'
    ]
    const tableData = [
        ['Мирный (включая шерифа)', props.serialityStatistics.successivelyPlayedByRed],
        ['Шериф', props.serialityStatistics.successivelyPlayedBySheriff],
        ['Мафия (включая дона)', props.serialityStatistics.successivelyPlayedByBlack],
        ['Дон', props.serialityStatistics.successivelyPlayedByDon]
    ]

    return (
        <>
            <h4>Подряд сыгранных ролей</h4>
            <Table
                tableHead={tableHead}
                tableData={tableData}
            />
        </>
    )
}

export default RolesPlayed
