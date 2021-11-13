import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

import footerStyle
    from 'assets/jss/material-dashboard-pro-react/components/footerStyle'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

function Footer({...props}) {
    const {classes, fluid, white} = props
    var container = cx({
        [classes.container]: !fluid,
        [classes.containerFluid]: fluid,
        [classes.whiteColor]: white
    })
    var anchor =
        classes.a +
        cx({
            [' ' + classes.whiteColor]: white
        })
    var block = cx({
        [classes.block]: true,
        [classes.whiteColor]: white
    })
    return (
        <footer className={classes.footer}>
            <div className={container}>
                <div className={classes.left}>
                    <List className={classes.list}>
                        <ListItem className={classes.inlineBlock}>
                            <a target="_blank"
                               rel="noopener noreferrer"
                               href="https://vk.com/club96096694"
                               className={block}>
                                {'Группа ВК'}
                            </a>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <a target="_blank"
                               rel="noopener noreferrer"
                               href="https://t.me/mafiabrest"
                               className={block}>
                                {'Telegram чат'}
                            </a>
                        </ListItem>
                    </List>
                </div>
                <p className={classes.right}>
                    &copy; {1900 + new Date().getYear()}{', '}
                    {'Сделано с '}
                    <i className="fa fa-heart heart" />
                    {' от '}
                    <a target="_blank"
                       rel="noopener noreferrer"
                       href="https://vk.com/id142419761"
                       className={anchor}>
                        {'г-на Орка'}
                    </a>
                </p>
            </div>
        </footer>
    )
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
    fluid: PropTypes.bool,
    white: PropTypes.bool
}

export default withStyles(footerStyle)(Footer)
