import Collapse from '@material-ui/core/Collapse'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import Icon from '@material-ui/core/Icon'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import withStyles from '@material-ui/core/styles/withStyles'
import {BarChart, ExitToApp, Gamepad, Settings} from '@material-ui/icons'
import Person from '@material-ui/icons/Person'

import sidebarStyle
    from 'assets/jss/material-dashboard-pro-react/components/sidebarStyle.jsx'
import cx from 'classnames'
import StatisticsNavbarLinks from 'components/Navbars/StatisticsNavbarLinks.jsx'
import PropTypes from 'prop-types'
import React from 'react'
import {NavLink} from 'react-router-dom'
import {getMention, getPhotoUrl, isAdmin, isHost} from '../../util/util'
import LoginPage from '../../views/LoginPage/LoginPage'

class SidebarWrapper extends React.Component {
    render() {
        const {className, user, headerLinks, links} = this.props
        return (
            <div className={className} ref="sidebarWrapper">
                {user}
                <Hidden mdUp implementation="css">
                    <br />
                </Hidden>
                {headerLinks}
                {links}
            </div>
        )
    }
}

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            openAvatar: false,
            miniActive: true,
            ...this.getCollapseStates(props.routes)
        }
    }

    // this creates the intial state of this component based on the collapse routes
    // that it gets through this.props.routes
    getCollapseStates = routes => {
        let initialState = {}
        routes.map((prop, key) => {
            if (prop.collapse) {
                initialState = {
                    [prop.state]: this.getCollapseInitialState(prop.views),
                    ...this.getCollapseStates(prop.views),
                    ...initialState
                }
            }
            return null
        })
        return initialState
    }
    // this verifies if any of the collapses should be default opened on a rerender of this component
    // for example, on the refresh of the page,
    // while on the src/views/forms/RegularForms.jsx - route /statistics/regular-forms
    getCollapseInitialState(routes) {
        for (let i = 0; i < routes.length; i++) {
            if (routes[i].collapse && this.getCollapseInitialState(routes[i].views)) {
                return true
            } else if (window.location.href.indexOf(routes[i].path) !== -1) {
                return true
            }
        }
        return false
    }

    // verifies if routeName is the one active (in browser input)
    activeRoute = routeName => {
        return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : ''
    }

    openCollapse(collapse) {
        var st = {}
        st[collapse] = !this.state[collapse]
        this.setState(st)
    }

    // this function creates the links and collapses that appear in the sidebar (left menu)
    createLinks = routes => {
        const {classes, color, rtlActive} = this.props
        return routes.map((prop, key) => {
            if (prop.redirect) {
                return null
            }
            if (prop.collapse) {
                var st = {}
                st[prop['state']] = !this.state[prop.state]
                const navLinkClasses =
                    classes.itemLink +
                    ' ' +
                    cx({
                        [' ' + classes.collapseActive]: this.getCollapseInitialState(
                            prop.views
                        )
                    })
                const itemText =
                    classes.itemText +
                    ' ' +
                    cx({
                        [classes.itemTextMini]:
                        this.props.miniActive && this.state.miniActive,
                        [classes.itemTextMiniRTL]:
                        rtlActive && this.props.miniActive && this.state.miniActive,
                        [classes.itemTextRTL]: rtlActive
                    })
                const collapseItemText =
                    classes.collapseItemText +
                    ' ' +
                    cx({
                        [classes.collapseItemTextMini]:
                        this.props.miniActive && this.state.miniActive,
                        [classes.collapseItemTextMiniRTL]:
                        rtlActive && this.props.miniActive && this.state.miniActive,
                        [classes.collapseItemTextRTL]: rtlActive
                    })
                const itemIcon =
                    classes.itemIcon +
                    ' ' +
                    cx({
                        [classes.itemIconRTL]: rtlActive
                    })
                const caret =
                    classes.caret +
                    ' ' +
                    cx({
                        [classes.caretRTL]: rtlActive
                    })
                const collapseItemMini =
                    classes.collapseItemMini +
                    ' ' +
                    cx({
                        [classes.collapseItemMiniRTL]: rtlActive
                    })
                return (
                    <ListItem
                        key={key}
                        className={cx(
                            {[classes.item]: prop.icon !== undefined},
                            {[classes.collapseItem]: prop.icon === undefined}
                        )}
                    >
                        <NavLink
                            to={'#'}
                            className={navLinkClasses}
                            onClick={e => {
                                e.preventDefault()
                                this.setState(st)
                            }}
                        >
                            {prop.icon !== undefined ? (
                                typeof prop.icon === 'string' ? (
                                    <Icon
                                        className={itemIcon}>{prop.icon}</Icon>
                                ) : (
                                    <prop.icon className={itemIcon} />
                                )
                            ) : (
                                <span className={collapseItemMini}>
                  {rtlActive ? prop.rtlMini : prop.mini}
                </span>
                            )}
                            <ListItemText
                                primary={rtlActive ? prop.rtlName : prop.name}
                                secondary={
                                    <b
                                        className={
                                            caret +
                                            ' ' +
                                            (this.state[prop.state] ? classes.caretActive : '')
                                        }
                                    />
                                }
                                disableTypography={true}
                                className={cx(
                                    {[itemText]: prop.icon !== undefined},
                                    {[collapseItemText]: prop.icon === undefined}
                                )}
                            />
                        </NavLink>
                        <Collapse in={this.state[prop.state]} unmountOnExit>
                            <List
                                className={classes.list + ' ' + classes.collapseList}>
                                {this.createLinks(prop.views)}
                            </List>
                        </Collapse>
                    </ListItem>
                )
            }
            const innerNavLinkClasses =
                classes.collapseItemLink +
                ' ' +
                cx({
                    [' ' + classes[color]]: this.activeRoute(prop.path)
                })
            const collapseItemMini =
                classes.collapseItemMini +
                ' ' +
                cx({
                    [classes.collapseItemMiniRTL]: rtlActive
                })
            const navLinkClasses =
                classes.itemLink +
                ' ' +
                cx({
                    [' ' + classes[color]]: this.activeRoute(prop.path)
                })
            const itemText =
                classes.itemText +
                ' ' +
                cx({
                    [classes.itemTextMini]:
                    this.props.miniActive && this.state.miniActive,
                    [classes.itemTextMiniRTL]:
                    rtlActive && this.props.miniActive && this.state.miniActive,
                    [classes.itemTextRTL]: rtlActive
                })
            const collapseItemText =
                classes.collapseItemText +
                ' ' +
                cx({
                    [classes.collapseItemTextMini]:
                    this.props.miniActive && this.state.miniActive,
                    [classes.collapseItemTextMiniRTL]:
                    rtlActive && this.props.miniActive && this.state.miniActive,
                    [classes.collapseItemTextRTL]: rtlActive
                })
            const itemIcon =
                classes.itemIcon +
                ' ' +
                cx({
                    [classes.itemIconRTL]: rtlActive
                })
            return (
                <ListItem
                    key={key}
                    className={cx(
                        {[classes.item]: prop.icon !== undefined},
                        {[classes.collapseItem]: prop.icon === undefined}
                    )}
                >
                    <NavLink
                        to={prop.layout + prop.path}
                        className={cx(
                            {[navLinkClasses]: prop.icon !== undefined},
                            {[innerNavLinkClasses]: prop.icon === undefined}
                        )}
                    >
                        {prop.icon !== undefined ? (
                            typeof prop.icon === 'string' ? (
                                <Icon className={itemIcon}>{prop.icon}</Icon>
                            ) : (
                                <prop.icon className={itemIcon} />
                            )
                        ) : (
                            <span className={collapseItemMini}>
                {rtlActive ? prop.rtlMini : prop.mini}
              </span>
                        )}
                        <ListItemText
                            primary={rtlActive ? prop.rtlName : prop.name}
                            disableTypography={true}
                            className={cx(
                                {[itemText]: prop.icon !== undefined},
                                {[collapseItemText]: prop.icon === undefined}
                            )}
                        />
                    </NavLink>
                </ListItem>
            )
        })
    }

    getUser(classes, rtlActive, bgColor, collapseItemText) {
        const itemText =
            classes.itemText +
            ' ' +
            cx({
                [classes.itemTextMini]: this.props.miniActive && this.state.miniActive,
                [classes.itemTextMiniRTL]:
                rtlActive && this.props.miniActive && this.state.miniActive,
                [classes.itemTextRTL]: rtlActive
            })
        const userWrapperClass =
            classes.user +
            ' ' +
            cx({
                [classes.whiteAfter]: bgColor === 'white'
            })
        const caret =
            classes.caret +
            ' ' +
            cx({
                [classes.caretRTL]: rtlActive
            })
        const photo =
            classes.photo +
            ' ' +
            cx({
                [classes.photoRTL]: rtlActive
            })

        const currentUser = this.props.currentUser
        const avatar = getPhotoUrl(currentUser)
        const nickname = getMention(currentUser) + ' ' + currentUser.nickname

        return (
            <div className={userWrapperClass}>
                <div className={photo}>
                    <img src={avatar} className={classes.avatarImg}
                         alt="..." />
                </div>
                <List className={classes.list}>
                    <ListItem
                        className={classes.item + ' ' + classes.userItem}>
                        <NavLink
                            to={'#'}
                            className={classes.itemLink + ' ' + classes.userCollapseButton}
                            onClick={() => this.openCollapse('openAvatar')}
                        >
                            <ListItemText
                                primary={nickname}
                                secondary={
                                    <b
                                        className={
                                            caret +
                                            ' ' +
                                            classes.userCaret +
                                            ' ' +
                                            (this.state.openAvatar ? classes.caretActive : '')
                                        }
                                    />
                                }
                                disableTypography={true}
                                className={itemText + ' ' + classes.userItemText}
                            />
                        </NavLink>
                        <Collapse in={this.state.openAvatar} unmountOnExit>
                            <List
                                className={classes.list + ' ' + classes.collapseList}>
                                <ListItem className={classes.collapseItem}>
                                    <NavLink
                                        to={`/statistics/players/${currentUser.id}`}
                                        className={
                                            classes.itemLink + ' ' + classes.userCollapseLinks
                                        }
                                    >
                                        <Person
                                            className={classes.collapseItemMini}
                                            style={{fontSize: '20px'}}
                                        />
                                        <ListItemText
                                            primary={'Мой профиль'}
                                            disableTypography={true}
                                            className={collapseItemText}
                                        />
                                    </NavLink>
                                </ListItem>
                                <ListItem className={classes.collapseItem}>
                                    <NavLink
                                        to={'/statistics/dashboard'}
                                        onClick={() => this.props.handleLogout()}
                                        className={
                                            classes.itemLink + ' ' + classes.userCollapseLinks
                                        }
                                    >
                                        <ExitToApp
                                            className={classes.collapseItemMini}
                                            style={{fontSize: '20px'}}
                                        />
                                        <ListItemText
                                            primary={'Выход'}
                                            disableTypography={true}
                                            className={collapseItemText}
                                        />
                                    </NavLink>
                                </ListItem>
                            </List>
                        </Collapse>
                    </ListItem>
                </List>
            </div>
        )
    }

    render() {
        const {
            classes,
            logo,
            image,
            logoText,
            bgColor,
            rtlActive
        } = this.props

        const collapseItemText =
            classes.collapseItemText +
            ' ' +
            cx({
                [classes.collapseItemTextMini]:
                this.props.miniActive && this.state.miniActive,
                [classes.collapseItemTextMiniRTL]:
                rtlActive && this.props.miniActive && this.state.miniActive,
                [classes.collapseItemTextRTL]: rtlActive
            })

        const user = this.props.authenticated
            ? this.getUser(classes, rtlActive, bgColor, collapseItemText)
            : <>
                <List className={classes.list}>
                    {this.createLinks([
                        {
                            path: '/login',
                            name: 'Авторизация',
                            component: LoginPage,
                            icon: Person,
                            layout: '/auth'
                        }
                    ])}
                </List>
            </>

        const adminSideBarLinks =
            this.props.authenticated &&
            isAdmin(this.props.currentUser)
                ? [{
                    collapse: true,
                    name: 'Управление',
                    icon: Settings,
                    state: 'manageComponentsCollapse',
                    views: [
                        {
                            path: '/manage/data',
                            name: 'Статистика',
                            icon: BarChart,
                            layout: '/statistics'
                        }
                    ]
                }]
                : []

        const hostSideBarLinks =
            this.props.authenticated &&
            isHost(this.props.currentUser)
                ? [{
                    collapse: true,
                    name: 'Управление играми',
                    icon: Gamepad,
                    state: 'manageGamesComponentsCollapse',
                    views: [
                        {
                            path: '/games/all',
                            name: 'Все игры',
                            icon: Gamepad,
                            layout: '/statistics'
                        },
                        {
                            path: '/host/game/:id?',
                            name: 'Игра',
                            icon: Gamepad,
                            layout: '/statistics'
                        }
                    ]
                }]
                : []

        const links = (
            <List className={classes.list}>
                {this.createLinks(adminSideBarLinks)}
                {this.createLinks(hostSideBarLinks)}
            </List>
        )

        const logoNormal =
            classes.logoNormal +
            ' ' +
            cx({
                [classes.logoNormalSidebarMini]:
                this.props.miniActive && this.state.miniActive,
                [classes.logoNormalSidebarMiniRTL]:
                rtlActive && this.props.miniActive && this.state.miniActive,
                [classes.logoNormalRTL]: rtlActive
            })
        const logoMini =
            classes.logoMini +
            ' ' +
            cx({
                [classes.logoMiniRTL]: rtlActive
            })
        const logoClasses =
            classes.logo +
            ' ' +
            cx({
                [classes.whiteAfter]: bgColor === 'white'
            })
        var brand = (
            <div className={logoClasses}>
                <span className={logoMini}>
                    <img src={logo} alt="logo" className={classes.img} />
                </span>
                <span className={logoNormal}>
                    {logoText}
                </span>
            </div>
        )
        const drawerPaper =
            classes.drawerPaper +
            ' ' +
            cx({
                [classes.drawerPaperMini]:
                this.props.miniActive && this.state.miniActive,
                [classes.drawerPaperRTL]: rtlActive
            })
        const sidebarWrapper =
            classes.sidebarWrapper +
            ' ' +
            cx({
                [classes.drawerPaperMini]:
                this.props.miniActive && this.state.miniActive
            })

        return (
            <div ref="mainPanel">
                <Hidden mdUp implementation="css">
                    <Drawer
                        variant="temporary"
                        anchor={rtlActive ? 'left' : 'right'}
                        open={this.props.open}
                        classes={{
                            paper: drawerPaper + ' ' + classes[bgColor + 'Background']
                        }}
                        onClose={this.props.handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true // Better open performance on mobile.
                        }}
                    >
                        {brand}
                        <SidebarWrapper
                            className={sidebarWrapper}
                            user={user}
                            headerLinks={
                                <StatisticsNavbarLinks
                                    pathname={this.props.location.pathname}
                                    authenticated={this.props.authenticated}
                                    currentUser={this.props.currentUser}
                                    handleLogout={this.props.handleLogout}
                                />
                            }
                            links={links}
                        />
                        {image !== undefined ? (
                            <div
                                className={classes.background}
                                style={{backgroundImage: 'url(' + image + ')'}}
                            />
                        ) : null}
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer
                        onMouseOver={() => this.setState({miniActive: false})}
                        onMouseOut={() => this.setState({miniActive: true})}
                        anchor={rtlActive ? 'right' : 'left'}
                        variant="permanent"
                        open
                        classes={{
                            paper: drawerPaper + ' ' + classes[bgColor + 'Background']
                        }}
                    >
                        {brand}
                        <SidebarWrapper
                            className={sidebarWrapper}
                            user={user}
                            links={links}
                        />
                        {image !== undefined ? (
                            <div
                                className={classes.background}
                                style={{backgroundImage: 'url(' + image + ')'}}
                            />
                        ) : null}
                    </Drawer>
                </Hidden>
            </div>
        )
    }
}

Sidebar.defaultProps = {
    bgColor: 'blue'
}

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired,
    bgColor: PropTypes.oneOf(['white', 'black', 'blue']),
    rtlActive: PropTypes.bool,
    color: PropTypes.oneOf([
        'white',
        'red',
        'orange',
        'green',
        'blue',
        'purple',
        'rose'
    ]),
    logo: PropTypes.string,
    logoText: PropTypes.string,
    image: PropTypes.string,
    routes: PropTypes.arrayOf(PropTypes.object)
}

export default withStyles(sidebarStyle)(Sidebar)
