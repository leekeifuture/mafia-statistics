// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import {cardTitle} from 'assets/jss/material-dashboard-pro-react.jsx'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import React from 'react'
// react component for creating dynamic tables
import LoadingIndicator
    from '../../components/LoadingIndicator/LoadingIndicator'
import GamesComponent from './GamesComponent'

const styles = {
    cardIconTitle: {
        ...cardTitle,
        marginTop: '15px',
        marginBottom: '0px'
    }
}

class Games extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            games: [{
                'host': {
                    'id': 123,
                    'nickname': 'Джек Николаевич Воскресенский'
                },
                'number': 1,
                'bestMove': [
                    1,
                    2,
                    3
                ],
                'startDatetime': '2023-03-17T15:13:30',
                'endDatetime': '2023-02-05T11:51:07',
                'status': 'COMPLETED',
                'won': 'RED',
                'note': 'Some Note',
                'blackPlayerOne': {
                    'id': 1,
                    'nickname': 'Джек Николаевич Воскресенский'
                },
                'blackPlayerTwo': {
                    'id': 3,
                    'nickname': 'Джек Николаевич Воскресенский'
                },
                'donPlayer': {
                    'id': 31,
                    'nickname': 'Джек Николаевич Воскресенский'
                },
                'sheriffPlayer': {
                    'id': 5,
                    'nickname': 'Джек Николаевич Воскресенский'
                },
                'firstShootPlayer': {
                    'id': 7,
                    'nickname': 'Джек Николаевич Воскресенский'
                },
                'players': [
                    {
                        'player': {
                            'id': 1,
                            'nickname': 'Джек Николаевич Воскресенский'
                        },
                        'foulsCount': 3
                    },
                    {
                        'player': {
                            'id': 1,
                            'nickname': 'Джек Николаевич Воскресенский'
                        },
                        'foulsCount': 3
                    }
                ],
                'bestPlayers': [
                    {
                        'player': {
                            'id': 1,
                            'nickname': 'Джек Николаевич Воскресенский'
                        },
                        'additionalPoints': 0
                    },
                    {
                        'player': {
                            'id': 7,
                            'nickname': 'Джек Николаевич Воскресенский'
                        },
                        'additionalPoints': 0
                    }
                ],
                'days': [
                    {
                        'number': 1,
                        'votingMap': [
                            {
                                'player': {
                                    'id': 1,
                                    'nickname': 'Джек Николаевич Воскресенский'
                                },
                                'whoPutToVote': {
                                    'id': 3,
                                    'nickname': 'Джек Николаевич Воскресенский'
                                },
                                'firstVoteCount': 32,
                                'secondVoteCount': 4
                            }
                        ]
                    }
                ]
            },
                {
                    'host': {
                        'id': 123,
                        'nickname': 'Джек Николаевич Воскресенский'
                    },
                    'number': 1,
                    'bestMove': [
                        1,
                        2,
                        3
                    ],
                    'startDatetime': '2023-03-17T15:13:30',
                    'endDatetime': '2023-02-05T11:51:07',
                    'status': 'COMPLETED',
                    'won': 'RED',
                    'note': 'Some Note',
                    'blackPlayerOne': {
                        'id': 1,
                        'nickname': 'Джек Николаевич Воскресенский'
                    },
                    'blackPlayerTwo': {
                        'id': 3,
                        'nickname': 'Джек Николаевич Воскресенский'
                    },
                    'donPlayer': {
                        'id': 31,
                        'nickname': 'Джек Николаевич Воскресенский'
                    },
                    'sheriffPlayer': {
                        'id': 5,
                        'nickname': 'Джек Николаевич Воскресенский'
                    },
                    'firstShootPlayer': {
                        'id': 7,
                        'nickname': 'Джек Николаевич Воскресенский'
                    },
                    'players': [
                        {
                            'player': {
                                'id': 1,
                                'nickname': 'Джек Николаевич Воскресенский'
                            },
                            'foulsCount': 3
                        },
                        {
                            'player': {
                                'id': 1,
                                'nickname': 'Джек Николаевич Воскресенский'
                            },
                            'foulsCount': 3
                        }
                    ],
                    'bestPlayers': [
                        {
                            'player': {
                                'id': 1,
                                'nickname': 'Джек Николаевич Воскресенский'
                            },
                            'additionalPoints': 0
                        },
                        {
                            'player': {
                                'id': 7,
                                'nickname': 'Джек Николаевич Воскресенский'
                            },
                            'additionalPoints': 0
                        }
                    ],
                    'days': [
                        {
                            'number': 1,
                            'votingMap': [
                                {
                                    'player': {
                                        'id': 1,
                                        'nickname': 'Джек Николаевич Воскресенский'
                                    },
                                    'whoPutToVote': {
                                        'id': 3,
                                        'nickname': 'Джек Николаевич Воскресенский'
                                    },
                                    'firstVoteCount': 32,
                                    'secondVoteCount': 4
                                }
                            ]
                        }
                    ]
                }],
            isLoading: false // TODO: fix loading
        }
    }

    // componentDidMount() {
    //     trackPromise(
    //         mafiaStatisticsApi.getAllGames()
    //             .then(
    //                 data => this.setState({games: data}),
    //                 error => this.props.history.push('/auth/error')
    //             )
    //     ).then(r => this.setState({isLoading: false}))
    // }

    render() {
        const {classes} = this.props
        return (<>
            {this.state.isLoading
                ? <LoadingIndicator />
                : (<>
                    <GridContainer>
                        <GridItem xs={12}>
                            <GamesComponent
                                classes={classes}
                                games={this.state.games}
                            />
                        </GridItem>
                    </GridContainer>
                </>)}
        </>)
    }
}

export default withStyles(styles)(Games)
