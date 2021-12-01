import Hidden from '@material-ui/core/Hidden'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Dashboard from '@material-ui/icons/Dashboard'
// @material-ui/icons
import Search from '@material-ui/icons/Search'

import statisticsNavbarLinksStyle
    from 'assets/jss/material-dashboard-pro-react/components/statisticsNavbarLinksStyle.jsx'
import Button from 'components/CustomButtons/Button.jsx'
// core components
import CustomInput from 'components/CustomInput/CustomInput.jsx'
import PropTypes from 'prop-types'
import React from 'react'
import {NavLink} from 'react-router-dom'

// import { Manager, Target, Popper } from "react-popper";

class StatisticsNavbarLinks extends React.Component {
    render() {
        const {classes} = this.props
        const searchButton =
            classes.top +
            ' ' +
            classes.searchButton
        return (
            <div>
                <CustomInput
                    formControlProps={{
                        className: classes.top + ' ' + classes.search
                    }}
                    inputProps={{
                        placeholder: 'Поиск по игрокам',
                        inputProps: {
                            'aria-label': 'Search',
                            className: classes.searchInput
                        }
                    }}
                />
                <Button
                    color="white"
                    aria-label="edit"
                    justIcon
                    round
                    className={searchButton}
                >
                    <Search
                        className={classes.headerLinksSvg + ' ' + classes.searchIcon}
                    />
                </Button>

                <NavLink style={{color: 'inherit'}}
                         to={'/statistics/dashboard'}>
                    <Button
                        color="transparent"
                        simple
                        aria-label="Dashboard"
                        justIcon
                        className={classes.buttonLink}
                        muiClasses={{
                            label: ''
                        }}
                    >
                        <Dashboard
                            className={
                                classes.headerLinksSvg + ' ' + classes.links
                            }
                        />
                        <Hidden mdUp implementation="css">
                            <span className={classes.linkText}>
                              {'Главная'}
                            </span>
                        </Hidden>
                    </Button>
                </NavLink>
            </div>
        )
    }
}

StatisticsNavbarLinks.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(statisticsNavbarLinksStyle)(StatisticsNavbarLinks)
