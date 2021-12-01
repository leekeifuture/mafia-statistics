// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import login from 'assets/img/login.jpeg'

import pagesStyle
    from 'assets/jss/material-dashboard-pro-react/layouts/authStyle.jsx'
// core components
import AuthNavbar from 'components/Navbars/AuthNavbar.jsx'
import PropTypes from 'prop-types'
import React from 'react'
import {Route, Switch} from 'react-router-dom'

import routes from 'routes.js'
import Footer from '../components/Footer/Footer'

class Pages extends React.Component {
    componentDidMount() {
        document.body.style.overflow = 'unset'
    }

    getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.collapse) {
                return this.getRoutes(prop.views)
            }
            if (prop.layout === '/auth') {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        component={prop.component}
                        key={key}
                    />
                )
            } else {
                return null
            }
        })
    }

    getActiveRoute = routes => {
        let activeRoute = 'Default Brand Text'
        for (let i = 0; i < routes.length; i++) {
            if (routes[i].collapse) {
                let collapseActiveRoute = this.getActiveRoute(routes[i].views)
                if (collapseActiveRoute !== activeRoute) {
                    return collapseActiveRoute
                }
            } else {
                if (
                    window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
                ) {
                    return routes[i].name
                }
            }
        }
        return activeRoute
    }

    render() {
        const {classes, ...rest} = this.props
        return (
            <div>
                <AuthNavbar brandText={this.getActiveRoute(routes)} {...rest} />
                <div className={classes.wrapper} ref="wrapper">
                    <div
                        className={classes.fullPage}
                        style={{backgroundImage: 'url(' + login + ')'}}
                    >
                        <Switch>{this.getRoutes(routes)}</Switch>
                        <Footer white />
                    </div>
                </div>
            </div>
        )
    }
}

Pages.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(pagesStyle)(Pages)
