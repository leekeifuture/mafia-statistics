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
    constructor(props) {
        super(props)
        this.state = {
            searchQuery: ''
        }
        this.handleChangeSearchQuery = this.handleChangeSearchQuery.bind(this)
    }

    handleChangeSearchQuery(event) {
        this.setState({searchQuery: event.target.value})
    }

    render() {
        const {classes} = this.props
        const searchButton =
            classes.top +
            ' ' +
            classes.searchButton
        return (
            <div>
                {this.props.pathname !== '/statistics/search/players'
                    ? (<form style={{display: 'inline'}}>
                        <CustomInput
                            formControlProps={{
                                className: classes.top + ' ' + classes.search
                            }}
                            inputProps={{
                                placeholder: 'Поиск по игрокам',
                                inputProps: {
                                    'aria-label': 'Search',
                                    className: classes.searchInput,
                                    value: this.state.searchQuery,
                                    onChange: this.handleChangeSearchQuery
                                }
                            }}
                        />
                        <NavLink style={{color: 'inherit'}}
                                 to={`/statistics/search/players?query=${this.state.searchQuery}`}
                        >
                            <Button
                                type="submit"
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
                        </NavLink>
                    </form>)
                    : (<></>)}

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
