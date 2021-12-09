import withStyles from '@material-ui/core/styles/withStyles'
import React from 'react'
import {mafiaStatisticsApi} from '../../api/mafiaStatisticsApi'
import validationFormsStyle
    from '../../assets/jss/material-dashboard-pro-react/views/validationFormsStyle'
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'

class Manage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            numbers: null,
            couple: null,
            rating: null,
            roles_history: null,
            visiting: null,
            games_per_number: null,
            seriality: null
        }
    }

    onFileChange = (event, key) => {
        const newState = {}
        newState[key] = event.target.files[0]

        this.setState(newState)
    }

    onFileUpload = (event, statisticsType) => {
        mafiaStatisticsApi.uploadNumbersStatistics(this.state[statisticsType], statisticsType)
            .then(
                data => console.log(data),
                error => console.error(error)
            )
    }

    render() {
        const statisticsTypes = {
            numbers: 'Статистика по номерам',
            couple: 'Лучшие мафиозные пары',
            rating: 'Рейтинговая таблица',
            roles_history: 'История вытянутых карт',
            visiting: 'Статистика по посещениям',
            games_per_number: 'Статистика по номеркам',
            seriality: 'Таблица серийности'
        }

        return (
            <GridContainer>
                {Object.keys(statisticsTypes).map((statisticsType, index) => {
                    return (
                        <GridContainer key={index}>
                            <GridItem>
                                <div>{statisticsTypes[statisticsType]}</div>
                                <input
                                    type="file"
                                    onChange={event => this.onFileChange(
                                        event, statisticsType
                                    )} />
                                <button
                                    onClick={event => this.onFileUpload(
                                        event, statisticsType)
                                    }>
                                    Upload
                                </button>
                            </GridItem>
                        </GridContainer>
                    )
                })}
            </GridContainer>
        )
    }
}

export default withStyles(validationFormsStyle)(Manage)
