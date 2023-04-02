import Assignment from '@material-ui/icons/Assignment'
import React from 'react'
import ReactTable from 'react-table'
import Card from '../../components/Card/Card'
import CardBody from '../../components/Card/CardBody'
import CardHeader from '../../components/Card/CardHeader'
import CardIcon from '../../components/Card/CardIcon'
import {getReadableDate} from '../../util/util'

const GamesComponent = (props) => {
    const columns = [
        {
            Header: 'Ведущий',
            accessor: 'host'
        },
        {
            Header: 'Победа',
            accessor: 'won'
        },
        {
            Header: 'Номер',
            accessor: 'number'
        },
        {
            Header: 'Статус',
            accessor: 'status'
        },
        {
            Header: 'Дата',
            accessor: 'date'
        }
        // {
        //     Header: 'Actions',
        //     accessor: 'actions',
        //     sortable: false,
        //     filterable: false
        // }
    ]

    const data = props.games.map((game, key) => {
        return {
            id: key,
            host: game.host.nickname ? game.host.nickname : '',
            won: getTeamWon(game.won),
            number: game.number,
            status: getGameStatus(game.status),
            date: getReadableDate(game.startDatetime, true)
            // actions: (
            //     // we've added some custom button actions
            //     <div className="actions-right">
            //         {/* use this button to add a like kind of action */}
            //         <Button
            //             justIcon
            //             round
            //             simple
            //             onClick={() => {
            //                 let obj = this.state.data.find(o => o.id === key)
            //                 alert(
            //                     'You\'ve clicked LIKE button on \n{ \nName: ' +
            //                     obj.name +
            //                     ', \nposition: ' +
            //                     obj.position +
            //                     ', \noffice: ' +
            //                     obj.office +
            //                     ', \nage: ' +
            //                     obj.age +
            //                     '\n}.'
            //                 )
            //             }}
            //             color="info"
            //             className="like"
            //         >
            //             <Favorite />
            //         </Button>{' '}
            //         {/* use this button to remove the data row */}
            //         <Button
            //             justIcon
            //             round
            //             simple
            //             onClick={() => {
            //                 var data = this.state.data
            //                 data.find((o, i) => {
            //                     if (o.id === key) {
            //                         // here you should add some custom code so you can delete the data
            //                         // from this component and from your server as well
            //                         data.splice(i, 1)
            //                         return true
            //                     }
            //                     return false
            //                 })
            //                 this.setState({data: data})
            //             }}
            //             color="danger"
            //             className="remove"
            //         >
            //             <Close />
            //         </Button>{' '}
            //     </div>
            // )
        }
    })

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
                    columns={columns}
                    data={data}
                    defaultPageSize={10}
                    showPaginationTop
                    showPaginationBottom={false}
                    className="-striped -highlight"
                />
            </CardBody>
        </Card>
    )
}

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

export default GamesComponent
