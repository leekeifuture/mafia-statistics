import withStyles from '@material-ui/core/styles/withStyles'

import errorPageStyles
    from 'assets/jss/material-dashboard-pro-react/views/errorPageStyles.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import PropTypes from 'prop-types'
import React from 'react'
import {mafiaStatisticsApi} from '../../api/mafiaStatisticsApi'

class ErrorPage extends React.Component {
    componentDidMount() {
        setInterval(() => mafiaStatisticsApi.getDashboardInfo()
                .then(data => this.props.history.push('/statistics/dashboard')),
            60000)

    }

    render() {
        const {classes} = this.props
        return (
            <div className={classes.contentCenter}>
                <GridContainer>
                    <GridItem md={12}>
                        <h1 className={classes.title}>500</h1>
                        <h2 className={classes.subTitle}>Сервер временно
                            недоступен :(</h2>
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}

ErrorPage.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(errorPageStyles)(ErrorPage)
