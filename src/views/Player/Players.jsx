import React from 'react'
import GridContainer from '../../components/Grid/GridContainer'

class Players extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const columns = [
            {
                name: 'nickname',
                title: 'Ник'
                // Cell: ({row}) => (
                //     <Link to={{
                //         pathname: `/admin/profile/${row.nickname}`,
                //         state: {data: row}
                //     }}>
                //         {row.name}
                //     </Link>
                // ),
                // render: ({row}) => (
                //     <Link to={{pathname: `/admin/profile/${row.nickname}`}}>
                //         {row.title}
                //     </Link>
                // )
            },
            {name: 'games_total', title: 'Игр всего'},
            {name: 'games_red', title: 'Игр красным'},
            {name: 'games_black', title: 'Игр чёрным'},
            {name: 'games_don', title: 'Игр доном'},
            {name: 'games_sheriff', title: 'Игр шерифом'}
        ]

        return (
            <GridContainer>

            </GridContainer>
        )
    }
}

export default Players
