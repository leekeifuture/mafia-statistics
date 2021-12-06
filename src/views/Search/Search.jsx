import withStyles from '@material-ui/core/styles/withStyles'
import {cardTitle} from 'assets/jss/material-dashboard-pro-react.jsx'
import Card from 'components/Card/Card.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import createHistory from 'history/createBrowserHistory'
import qs from 'qs'
import React from 'react'
import {trackPromise} from 'react-promise-tracker'
import {NavLink} from 'react-router-dom'
import {mafiaStatisticsApi} from '../../api/mafiaStatisticsApi'
import CustomInput from '../../components/CustomInput/CustomInput'
import LoadingIndicator
    from '../../components/LoadingIndicator/LoadingIndicator'
import Table from '../../components/Table/Table'
import {getMention} from '../../util/util'

const styles = {
    cardIconTitle: {
        ...cardTitle,
        marginTop: '15px',
        marginBottom: '0px'
    }
}

class Search extends React.Component {
    constructor(props) {
        super(props)
        const query = qs.parse(
            this.props.location.search,
            {ignoreQueryPrefix: true}
        ).query
        this.state = {
            searchQuery: query ? query : '',
            data: [],
            isLoading: true
        }
        this.handleChangeSearchQuery = this.handleChangeSearchQuery.bind(this)
    }

    handleChangeSearchQuery(event) {
        this.setState({searchQuery: event.target.value})
    }

    searchPlayersByNickname(nickname) {
        trackPromise(
            mafiaStatisticsApi.searchPlayersByNickname(nickname)
                .then(
                    data => this.setState({data}),
                    error => console.error(error)
                )
        ).then(r => this.setState({isLoading: false}))
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchQuery !== this.state.searchQuery) {
            this.setState({isLoading: true})
            this.searchPlayersByNickname(this.state.searchQuery)
        }
    }

    componentDidMount() {
        const history = createHistory()
        if (history.location && history.location.search) {
            let location = {...history.location}
            delete history.location.search
            history.replace({...history.location, location})
        }

        this.searchPlayersByNickname(this.state.searchQuery)
    }

    render() {
        const tableData = []

        this.state.data.forEach(player => {
            const mention = getMention(player)

            tableData.push([
                (<NavLink style={{color: 'black'}}
                          to={`/statistics/players/${player.id}`}>{
                    mention + player.nickname
                }</NavLink>),
                player.gamesTotal
            ])
        })

        return (<GridContainer>
            <GridItem xs={12}>
                <Card>
                    <CardBody>
                        <CustomInput
                            labelText="Имя игрока"
                            formControlProps={{
                                fullWidth: true
                            }}
                            inputProps={{
                                value: this.state.searchQuery,
                                onChange: this.handleChangeSearchQuery
                            }}
                        />
                    </CardBody>
                </Card>
                {this.state.isLoading
                    ? <LoadingIndicator />
                    : (<>
                        {tableData.length !== 0
                            ? (<Card>
                                <CardBody>
                                    <Table
                                        tableHeaderColor="primary"
                                        tableHead={['Никнейм', 'Кол-во игр']}
                                        tableData={tableData}
                                        coloredColls={[3]}
                                        colorsColls={['primary']}
                                    />
                                </CardBody>
                            </Card>)
                            : (<h2 style={{
                                marginTop: '5vh',
                                marginBottom: '30px',
                                textAlign: 'center'
                            }}>
                                Никого не найдено
                            </h2>)}
                    </>)
                }
            </GridItem>
        </GridContainer>)
    }
}

export default withStyles(styles)(Search)
