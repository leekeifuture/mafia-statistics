import Hidden from '@material-ui/core/Hidden'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Dashboard from '@material-ui/icons/Dashboard'
// @material-ui/icons
import Person from '@material-ui/icons/Person'
import Search from '@material-ui/icons/Search'

import adminNavbarLinksStyle
    from 'assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle.jsx'
import classNames from 'classnames'
import Button from 'components/CustomButtons/Button.jsx'
// core components
import CustomInput from 'components/CustomInput/CustomInput.jsx'
import PropTypes from 'prop-types'
import React from 'react'
import {NavLink} from 'react-router-dom'

// import { Manager, Target, Popper } from "react-popper";

class HeaderLinks extends React.Component {
    render() {
        const {classes, rtlActive} = this.props
        const searchButton =
            classes.top +
            ' ' +
            classes.searchButton +
            ' ' +
            classNames({
                [classes.searchRTL]: rtlActive
            })

        const wrapper = classNames({
            [classes.wrapperRTL]: rtlActive
        })

        return (
            <div className={wrapper}>
                <CustomInput
                    rtlActive={rtlActive}
                    formControlProps={{
                        className: classes.top + ' ' + classes.search
                    }}
                    inputProps={{
                        placeholder: rtlActive ? 'بحث' : 'Search',
                        inputProps: {
                            'aria-label': rtlActive ? 'بحث' : 'Search',
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
                         to={'/admin/dashboard'}>
                    <Button
                        color="transparent"
                        simple
                        aria-label="Dashboard"
                        justIcon
                        className={rtlActive ? classes.buttonLinkRTL : classes.buttonLink}
                        muiClasses={{
                            label: rtlActive ? classes.labelRTL : ''
                        }}
                    >
                        <Dashboard
                            className={
                                classes.headerLinksSvg +
                                ' ' +
                                (rtlActive
                                    ? classes.links + ' ' + classes.linksRTL
                                    : classes.links)
                            }
                        />
                        <Hidden mdUp implementation="css">
                        <span className={classes.linkText}>
                          {rtlActive ? 'لوحة القيادة' : 'Dashboard'}
                        </span>
                        </Hidden>
                    </Button>
                </NavLink>

                <NavLink style={{color: 'inherit'}}
                         to={'/auth/login-page'}>
                    <Button
                        color="transparent"
                        aria-label="Person"
                        justIcon
                        className={rtlActive ? classes.buttonLinkRTL : classes.buttonLink}
                        muiClasses={{
                            label: rtlActive ? classes.labelRTL : ''
                        }}
                    >
                        <Person
                            className={
                                classes.headerLinksSvg +
                                ' ' +
                                (rtlActive
                                    ? classes.links + ' ' + classes.linksRTL
                                    : classes.links)
                            }
                        />
                        <Hidden mdUp implementation="css">
                        <span className={classes.linkText}>
                          {rtlActive ? 'الملف الشخصي' : 'Profile'}
                        </span>
                        </Hidden>
                    </Button>
                </NavLink>
            </div>
        )
    }
}

HeaderLinks.propTypes = {
    classes: PropTypes.object.isRequired,
    rtlActive: PropTypes.bool
}

export default withStyles(adminNavbarLinksStyle)(HeaderLinks)
