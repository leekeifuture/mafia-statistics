import React from 'react'
import avatar from '../../assets/img/faces/marc.jpg'
import {blackColor} from '../../assets/jss/material-dashboard-pro-react'
import Card from '../../components/Card/Card'
import CardAvatar from '../../components/Card/CardAvatar'
import CardBody from '../../components/Card/CardBody'
import CustomLinearProgress
    from '../../components/CustomLinearProgress/CustomLinearProgress'

const PlayerCardComponent = (props) => {
    const gamesTotal = props.state.gamesTotal
    const gamesWined =
        props.state.ratingStatistics.gamesRed +
        props.state.ratingStatistics.gamesBlack +
        props.state.ratingStatistics.gamesDon +
        props.state.ratingStatistics.gamesSheriff

    return (
        <Card profile>
            <CardAvatar profile>
                <a href=""
                   onClick={e => e.preventDefault()}>
                    <img src={avatar} alt="..." />
                </a>
            </CardAvatar>
            <CardBody profile>
                <h6 className={props.classes.cardCategory}
                    style={{
                        display: 'inline',
                        textTransform: 'lowercase'
                    }}
                >
                    г-н {' '}
                </h6>
                <h4 className={props.classes.cardTitle}
                    style={{display: 'inline'}}
                >
                    {props.state.nickname}
                </h4>
                <hr />
                <p style={{color: blackColor}}
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
                            очки: {props.state.ratingStatistics.points}
                        </li>
                    </ul>

                    <br />

                    <span style={{display: 'flex'}}>
                        <span style={{
                            textAlign: 'left',
                            flexGrow: 1
                        }}>
                            {`${gamesWined} из ${gamesTotal} игр выиграно`}
                        </span>
                        <span style={{
                            textAlign: 'right'
                        }}>
                            {props.state.rolesHistoryStatistics.percentWinning + ' %'}
                        </span>
                    </span>

                    <CustomLinearProgress
                        variant="determinate"
                        color="primary"
                        value={props.state.rolesHistoryStatistics.percentWinning}
                    />
                </p>
            </CardBody>
        </Card>
    )
}

export default PlayerCardComponent
