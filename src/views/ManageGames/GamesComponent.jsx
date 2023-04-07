import withStyles from '@material-ui/core/styles/withStyles'
import Assignment from '@material-ui/icons/Assignment'
import React from 'react'
import {NavLink} from 'react-router-dom'
import ReactTable from 'react-table'
import {cardTitle} from '../../assets/jss/material-dashboard-pro-react'
import Card from '../../components/Card/Card'
import CardBody from '../../components/Card/CardBody'
import CardHeader from '../../components/Card/CardHeader'
import CardIcon from '../../components/Card/CardIcon'
import {getMention, getReadableDate} from '../../util/util'

const GamesComponent = (props) => {
    const columns = [
        {
            Header: 'Ведущий',
            accessor: 'host'
        },
        {
            Header: 'Победа',
            accessor: 'won',
            minWidth: 100
        },
        {
            Header: 'Номер',
            accessor: 'number',
            minWidth: 100
        },
        {
            Header: 'Статус',
            accessor: 'status',
            minWidth: 100
        },
        {
            Header: 'Дата',
            accessor: 'date',
            minWidth: 150
        }
    ].map(props => (
        {...props, Cell: props => ClickableCell(props)}
    ))

    const data = props.games.map((game, key) => ({
        id: key,
        gameId: game.host.id,
        host: (<>
            <small>{getMention(game.host)}</small> {game.host.nickname}
        </>),
        won: getTeamWon(game.won),
        number: game.number,
        status: getGameStatus(game.status),
        date: getReadableDate(game.startDatetime, true)
    }))

    return (
        <Card>
            <CardHeader color="primary" icon>
                <CardIcon color="primary">
                    <Assignment />
                </CardIcon>
                <h4 className={props.classes.cardIconTitle}>
                    Список всех игр
                </h4>
            </CardHeader>
            <CardBody>
                <ReactTable
                    minRows={0}
                    columns={columns}
                    data={data}
                    defaultPageSize={10}
                    showPaginationBottom
                    className="-striped -highlight"
                    // Text
                    previousText={'Пред.'}
                    nextText={'След.'}
                    loadingText={'Загрузка...'}
                    noDataText={'Игр не найдено'}
                    pageText={'Страница'}
                    ofText={'из'}
                    rowsText={'игр'}
                    pageJumpText={'перейти на страницу'}
                    rowsSelectorText={'игр на страницу'}
                />
            </CardBody>
        </Card>
    )
}

const ClickableCell = props =>
    <NavLink
        style={{padding: '7px 5px', display: 'block', color: 'black'}}
        to={`/statistics/host/manage/games/${props.original.id}`}>
        {props.row[props.column.id]}
    </NavLink>

const getTeamWon = wonEnum => {
    if (wonEnum === 'RED') {
        return 'Красные'
    } else if (wonEnum === 'BLACK') {
        return 'Чёрные'
    } else if (wonEnum === 'DRAW') {
        return 'Ничья'
    }
}

const getGameStatus = (statusEnum) =>
    statusEnum === 'COMPLETED' ? 'Завершена' : 'В процессе'

const styles = {
    cardIconTitle: {
        ...cardTitle,
        marginTop: '15px',
        marginBottom: '0px'
    }
}

export default withStyles(styles)(GamesComponent)
