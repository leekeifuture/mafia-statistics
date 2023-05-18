import AppBar from '@material-ui/core/AppBar'
import Hidden from '@material-ui/core/Hidden'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Toolbar from '@material-ui/core/Toolbar'
// material-ui icons
import Menu from '@material-ui/icons/Menu'
import MoreVert from '@material-ui/icons/MoreVert'
import ViewList from '@material-ui/icons/ViewList'

import statisticsNavbarStyle
    from 'assets/jss/material-dashboard-pro-react/components/statisticsNavbarStyle.jsx'
import cx from 'classnames'
import Button from 'components/CustomButtons/Button.jsx'
import PropTypes from 'prop-types'
import React from 'react'
import StatisticsNavbarLinks from './StatisticsNavbarLinks'

// core components

function StatisticsNavbar({...props}) {
    const {classes, color, brandText} = props
    const appBarClasses = cx({
        [' ' + classes[color]]: color
    })
    return (
        <AppBar className={classes.appBar + appBarClasses}>
            <Toolbar className={classes.container}>
                <Hidden smDown implementation="css">
                    <div className={classes.sidebarMinimize}>
                        {props.miniActive ? (
                            <Button
                                justIcon
                                round
                                color="white"
                                onClick={props.sidebarMinimize}
                            >
                                <ViewList className={classes.sidebarMiniIcon}/>
                            </Button>
                        ) : (
                            <Button
                                justIcon
                                round
                                color="white"
                                onClick={props.sidebarMinimize}
                            >
                                <MoreVert className={classes.sidebarMiniIcon}/>
                            </Button>
                        )}
                    </div>
                </Hidden>
                <div className={classes.flex}>
                    {/* Here we create navbar brand, based on route name */}
                    <Button href="" className={classes.title}
                            color="transparent">
                        {brandText}
                    </Button>
                </div>
                <Hidden smDown implementation="css">
                    <StatisticsNavbarLinks
                        pathname={props.location.pathname}
                        authenticated={props.authenticated}
                        currentUser={props.currentUser}
                        handleLogout={props.handleLogout}
                    />
                </Hidden>
                <Hidden mdUp implementation="css">
                    <Button
                        className={classes.appResponsive}
                        color="transparent"
                        justIcon
                        aria-label="open drawer"
                        onClick={props.handleDrawerToggle}
                    >
                        <Menu/>
                    </Button>
                </Hidden>
            </Toolbar>
        </AppBar>
    )
}

StatisticsNavbar.propTypes = {
    classes: PropTypes.object.isRequired,
    color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger']),
    brandText: PropTypes.string
}

export default withStyles(statisticsNavbarStyle)(StatisticsNavbar)
