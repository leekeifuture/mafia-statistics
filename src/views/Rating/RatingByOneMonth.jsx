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
        const dataTable = this.state.ratingByOneMonth.map((prop, key) => {
            return {
                id: prop.id,
                nickname: prop.nickname,
                gamesTotal: prop.gamesTotal,
                points: prop.points,
                additionalPoints: prop.additionalPoints
            }
        })

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
                                    data={dataTable}
                                    filterable
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
                                        }
                                    ]}
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
