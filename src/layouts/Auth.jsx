import withStyles from '@material-ui/core/styles/withStyles'
import error from 'assets/img/error.jpg'
import login from 'assets/img/login.jpeg'

import pagesStyle
    from 'assets/jss/material-dashboard-pro-react/layouts/authStyle.jsx'
import AuthNavbar from 'components/Navbars/AuthNavbar.jsx'
import PropTypes from 'prop-types'
import React from 'react'
import {Route, Switch} from 'react-router-dom'

import routes from 'routes.js'
import Footer from '../components/Footer/Footer'
import SmallNotification from '../components/views/Components/SmallNotification'
import {trackMetriks} from '../util/util'


class Auth extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            smallNotification: false
        }
        this.handleClose = this.handleClose.bind(this)
    }

    componentDidMount() {
        trackMetriks(window.location.pathname)

        if (this.props.location.state && this.props.location.state.error) {
            this.setState({smallNotification: true})
        }

        if (this.props.location.pathname === '/auth' || this.getBgImage() == null) {
            this.props.history.push('/auth/login')
        }

        document.body.style.overflow = 'unset'
    }

    componentDidUpdate(e) {
        trackMetriks(e.history.location.pathname)
    }

    handleClose(modal) {
        var x = []
        x[modal] = false
        this.setState(x)
    }

    getBgImage = () => {
        if (window.location.pathname.indexOf('/auth/login') !== -1) {
            return login
        } else if (window.location.pathname.indexOf('/auth/error') !== -1) {
            return error
        }
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
                        exact={prop.exact}
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
                        style={{backgroundImage: 'url(' + this.getBgImage() + ')'}}
                    >
                        <Switch>{this.getRoutes(routes)}</Switch>
                        <Footer white />
                    </div>
                </div>
                <SmallNotification
                    handleClose={this.handleClose}
                    smallNotification={this.state.smallNotification}
                    title={'Пользователь не найден :('}
                    description={(<>
                        По вопросам авторизации можно обратиться к
                        {' '}
                        <a target="_blank"
                           rel="noopener noreferrer"
                           href="https://vk.com/id142419761">
                            {'администратору'}
                        </a>
                    </>)}
                />
            </div>
        )
    }
}

Auth.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(pagesStyle)(Auth)
