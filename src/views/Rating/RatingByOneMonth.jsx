import withStyles from '@material-ui/core/styles/withStyles'
import Assignment from '@material-ui/icons/Assignment'

import {cardTitle} from 'assets/jss/material-dashboard-pro-react.jsx'
import Card from 'components/Card/Card.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import CardIcon from 'components/Card/CardIcon.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import React from 'react'
import {trackPromise} from 'react-promise-tracker'
import ReactTable from 'react-table'
import {mafiaStatisticsApi} from '../../api/mafiaStatisticsApi'
import LoadingIndicator
    from '../../components/LoadingIndicator/LoadingIndicator'
import {getSubtextDate} from '../../util/util'

const styles = {
    cardIconTitle: {
        ...cardTitle,
        marginTop: '15px',
        marginBottom: '0px'
    }
}

class RatingByOneMonth extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ratingByOneMonth: [],
            isLoading: true
        }
    }

    componentDidMount() {
        trackPromise(
            mafiaStatisticsApi.getRatingByOneMonth(this.props.match.params.date, 0)
                .then(
                    data => this.setState({ratingByOneMonth: data}),
                    error => this.props.history.push('/auth/error')
                )
        ).then(r => this.setState({isLoading: false}))
    }

    render() {
        const {classes} = this.props
        return (
            <GridContainer>
                {this.state.isLoading
                    ? <LoadingIndicator />
                    : <GridItem xs={12}>
                        <Card>
                            <CardHeader color="primary" icon>
                                <CardIcon color="primary">
                                    <Assignment />
                                </CardIcon>
                                <h4 className={classes.cardIconTitle}>
                                    Рейтинг за {' '}
                                    {getSubtextDate(
                                        this.state.ratingByOneMonth[0].fromDate,
                                        this.state.ratingByOneMonth[0].toDate
                                    )}
                                </h4>
                            </CardHeader>
                            <CardBody>
                                <ReactTable
                                    data={this.state.ratingByOneMonth}
                                    columns={[
                                        {
                                            Header: 'Игрок',
                                            accessor: 'nickname'
                                        },
                                        {
                                            Header: 'Игр сыграно',
                                            accessor: 'gamesTotal'
                                        },
                                        {
                                            Header: 'Очки',
                                            accessor: 'points'
                                        },
                                        {
                                            Header: 'ЛИ/штраф',
                                            accessor: 'additionalPoints'
                                        },
                                        {
                                            Header: 'Лучший ход',
                                            accessor: 'bestMove'
                                        },
                                        {
                                            Header: 'Выиграно красным',
                                            accessor: 'gamesRed',
                                            minWidth: 120
                                        },
                                        {
                                            Header: 'Выиграно чёрным',
                                            accessor: 'gamesBlack',
                                            minWidth: 120

                                        },
                                        {
                                            Header: 'Выиграно доном',
                                            accessor: 'gamesDon',
                                            minWidth: 120

                                        },
                                        {
                                            Header: 'Выиграно шерифом',
                                            accessor: 'gamesSheriff',
                                            minWidth: 120

                                        }
                                    ]}
                                    style={{
                                        width: '100%'
                                    }}
                                    pageSize={this.state.ratingByOneMonth.length}
                                    showPaginationBottom={false}
                                    className="-striped -highlight"
                                />
                            </CardBody>
                        </Card>
                    </GridItem>
                }
            </GridContainer>
        )
    }
}

export default withStyles(styles)(RatingByOneMonth)
