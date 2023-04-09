export function shortId() {
    return '_' + Math.random().toString(36).substr(2, 9)
}

export function randomColor() {
    return `hsl(${Math.floor(Math.random() * 360)}, 95%, 90%)`
}

export function makeData(game) {
    const data = game.players.map((player, index) => ({
            number: index + 1,
            ID: index,
            nickname: player.player.nickname
        })
    )

    let columns = [
        {
            id: 'number',
            label: '',
            accessor: 'number',
            width: 20,
            dataType: DataTypes.NUMBER
        },
        {
            id: 'nickname',
            label: 'Никнейм',
            accessor: 'nickname',
            minWidth: 100,
            dataType: DataTypes.TEXT
        },
        {
            id: Constants.ADD_COLUMN_ID,
            width: 20,
            label: '+',
            disableResizing: true,
            dataType: 'null'
        }
    ]
    return {columns, data, skipReset: false}
}

export const ActionTypes = Object.freeze({
    ADD_OPTION_TO_COLUMN: 'add_option_to_column',
    ADD_ROW: 'add_row',
    UPDATE_COLUMN_TYPE: 'update_column_type',
    UPDATE_COLUMN_HEADER: 'update_column_header',
    UPDATE_CELL: 'update_cell',
    ADD_COLUMN_TO_LEFT: 'add_column_to_left',
    ADD_COLUMN_TO_RIGHT: 'add_column_to_right',
    DELETE_COLUMN: 'delete_column',
    ENABLE_RESET: 'enable_reset'
})

export const DataTypes = Object.freeze({
    NUMBER: 'number',
    TEXT: 'text',
    SELECT: 'select'
})

export const Constants = Object.freeze({
    ADD_COLUMN_ID: 999999
})
