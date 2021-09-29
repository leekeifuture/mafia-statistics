import withStyles from '@material-ui/core/styles/withStyles'
import dashboardStyle
    from 'assets/jss/material-dashboard-pro-react/views/dashboardStyle'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import PropTypes from 'prop-types'
import React from 'react'
import RatingTableComponent from './RatingTableComponent'
import RecordsComponent from './RecordsComponent'
import TopGamesTableComponent from './TopGamesTableComponent'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {classes} = this.props
        return (
            <div>
                <GridContainer>
                    <RecordsComponent classes={classes} />
                </GridContainer>
                <GridContainer>
                    <GridItem xs={12} sm={6} md={6} lg={6}>
                        <TopGamesTableComponent classes={classes} />
                    </GridItem>
                    <GridItem xs={12} sm={6} md={6} lg={6}>
                        <RatingTableComponent classes={classes} />
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(dashboardStyle)(Dashboard)
