import {CardMembership} from '@material-ui/icons'
import React from 'react'
import {blackColor} from '../../assets/jss/material-dashboard-pro-react'
import Card from '../../components/Card/Card'
import CardAvatar from '../../components/Card/CardAvatar'
import CardBody from '../../components/Card/CardBody'
import CustomLinearProgress
    from '../../components/CustomLinearProgress/CustomLinearProgress'
import {getMention, getPhotoUrl} from '../../util/util'

const getClubCardType = (gamesTotal) => {
    let clubCardType = ''

    if (gamesTotal >= 1000) {
        clubCardType = 'ЗОЛОТО'
    } else if (gamesTotal >= 500) {
        clubCardType = 'СЕРЕБРО'
    } else if (gamesTotal >= 100) {
        clubCardType = 'БРОНЗА'
    }

    const clubCardText = clubCardType ? `Тип клубной карты: ${clubCardType}` : ''

    if (!clubCardType) {
        return <></>
    }

    return (
        <div>
            <br />
            <div style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap'
            }}>
                <CardMembership />
                <span style={{marginLeft: '5px'}}>
                            {clubCardText}
                        </span>
            </div>
        </div>
    )
}

const PlayerCardComponent = props => {
    const gamesTotal = props.state.gamesTotal

    const gamesWon = props.state.ratingStatistics
        ? props.state.ratingStatistics.gamesWon
        : 0

    const maximumSeriesOfWin = props.state.serialityStatistics
        ? props.state.serialityStatistics.maximumSeriesOfWin
        : 0
    const maximumSeriesOfDefeat = props.state.serialityStatistics
        ? props.state.serialityStatistics.maximumSeriesOfDefeat
        : 0

    const ratingPoints = props.state.ratingStatistics
        ? props.state.ratingStatistics.points
        : 0

    const percentWinning = props.state.rolesHistoryStatistics
        ? props.state.rolesHistoryStatistics.percentWinning
        : 0

    const mention = getMention(props.state)

    return (
        <Card profile>
            <CardAvatar profile>
                <img src={getPhotoUrl(props.state)}
                     alt="..." />
            </CardAvatar>
            <CardBody profile>
                <h6 className={props.classes.cardCategory}
                    style={{
                        display: 'inline',
                        textTransform: 'lowercase'
                    }}
                >
                    {mention}
                </h6>
                <h4 className={props.classes.cardTitle}
                    style={{display: 'inline'}}
                >
                    {props.state.nickname}
                </h4>
                <hr />
                <span style={{color: blackColor}}
                   className={props.classes.description}>
                    <ul style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        listStyleType: 'none',
                        padding: 0
                    }}>
                        <li>
                            Игры сыграно: {props.state.gamesTotal}
                        </li>
                        <li style={{
                            borderLeft: '1px solid',
                            paddingLeft: '5px',
                            marginLeft: '5px'
                        }}>
                            Рейтинговые
                            очки: {ratingPoints}
                        </li>
                    </ul>

                    <br />

                    <span style={{display: 'flex'}}>
                        <span style={{
                            textAlign: 'left',
                            flexGrow: 1
                        }}>
                            {`${gamesWon} из ${gamesTotal} игр выиграно`}
                        </span>
                        <span style={{
                            textAlign: 'right'
                        }}>
                            {percentWinning + '%'}
                        </span>
                    </span>

                    <CustomLinearProgress
                        variant="determinate"
                        color="primary"
                        value={percentWinning}
                    />

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap'
                    }}>
                        <i className="fas fa-trophy" />
                        <span style={{marginLeft: '5px'}}>
                            Максимальная серия
                            побед: {maximumSeriesOfWin}
                        </span>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap'
                    }}>
                        <i className="fas fa-shield-alt"
                           style={{marginLeft: '1px'}} />
                        <span style={{marginLeft: '6px'}}>
                            Максимальная серия
                            поражений: {maximumSeriesOfDefeat}
                        </span>
                    </div>

                    {getClubCardType(props.state.gamesTotal)}
                </span>
            </CardBody>
        </Card>
    )
}

export default PlayerCardComponent
