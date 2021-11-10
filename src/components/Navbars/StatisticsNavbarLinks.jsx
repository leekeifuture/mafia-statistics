import Hidden from '@material-ui/core/Hidden'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import {ExitToApp} from '@material-ui/icons'
import Dashboard from '@material-ui/icons/Dashboard'
// @material-ui/icons
import Person from '@material-ui/icons/Person'
import Search from '@material-ui/icons/Search'

import statisticsNavbarLinksStyle
    from 'assets/jss/material-dashboard-pro-react/components/statisticsNavbarLinksStyle.jsx'
import Button from 'components/CustomButtons/Button.jsx'
// core components
import CustomInput from 'components/CustomInput/CustomInput.jsx'
import PropTypes from 'prop-types'
import React from 'react'
import {NavLink} from 'react-router-dom'
import {getPhotoUrl} from '../../util/util'
import CardAvatar from '../Card/CardAvatar'

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
                        placeholder: 'Поиск',
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
                          {'Dashboard'}
                        </span>
                        </Hidden>
                    </Button>
                </NavLink>

                {this.props.authenticated
                    ? (
                        <>
                            <NavLink style={{color: 'inherit'}}
                                     to={`/statistics/players/${this.props.currentUser.id}`}>
                                <Button
                                    color="transparent"
                                    aria-label="Profile"
                                    justIcon
                                    className={classes.buttonLink}
                                    muiClasses={{
                                        label: ''
                                    }}
                                    style={{width: '50px', fontSize: 0}}
                                >
                                    <CardAvatar profile style={{marginTop: 0}}>
                                        <img
                                            src={getPhotoUrl(this.props.currentUser.photoUrl)}
                                            alt="..." />
                                    </CardAvatar>
                                    <Hidden mdUp implementation="css">
                                        <span className={classes.linkText}>
                                          {'Мой профиль'}
                                        </span>
                                    </Hidden>
                                </Button>
                            </NavLink>
                            <NavLink style={{color: 'inherit'}}
                                     to={'/statistics/dashboard'}>
                                <Button
                                    onClick={() => this.props.handleLogout()}
                                    color="transparent"
                                    aria-label="Exit"
                                    justIcon
                                    className={classes.buttonLink}
                                    muiClasses={{
                                        label: ''
                                    }}
                                >
                                    <ExitToApp
                                        className={classes.headerLinksSvg}
                                    />
                                    <Hidden mdUp implementation="css">
                                    <span className={classes.linkText}>
                                      {'Выход'}
                                    </span>
                                    </Hidden>
                                </Button>
                            </NavLink>
                        </>
                    )
                    : (
                        <NavLink style={{color: 'inherit'}}
                                 to={'/auth/login'}>
                            <Button
                                color="transparent"
                                aria-label="Login"
                                justIcon
                                className={classes.buttonLink}
                                muiClasses={{
                                    label: ''
                                }}
                            >
                                <Person
                                    className={
                                        classes.headerLinksSvg +
                                        ' ' +
                                        classes.links
                                    }
                                />
                                <Hidden mdUp implementation="css">
                                    <span className={classes.linkText}>
                                      {'Войти'}
                                    </span>
                                </Hidden>
                            </Button>
                        </NavLink>
                    )}
            </div>
        )
    }
}

StatisticsNavbarLinks.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(statisticsNavbarLinksStyle)(StatisticsNavbarLinks)
