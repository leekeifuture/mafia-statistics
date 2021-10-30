import withStyles from '@material-ui/core/styles/withStyles'
import loginPageStyle
    from 'assets/jss/material-dashboard-pro-react/views/loginPageStyle.jsx'
import Card from 'components/Card/Card.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import PropTypes from 'prop-types'
import React from 'react'

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        // we use this to make the card to appear after the page has been rendered
        this.state = {
            cardAnimaton: 'cardHidden'
        }
    }

    componentDidMount() {
        window.VK.init({apiId: 7969557})
        window.VK.Widgets.Auth('vk_auth', {
            onAuth: data => {
                alert('user ' + data['uid'] + ' authorized')
            }
        })

        // we add a hidden class to the card and after 700 ms we delete it and the transition appears
        this.timeOutFunction = setTimeout(
            function () {
                this.setState({cardAnimaton: ''})
            }.bind(this),
            700
        )
    }

    componentWillUnmount() {
        clearTimeout(this.timeOutFunction)
        this.timeOutFunction = null
    }

    render() {
        const {classes} = this.props
        return (
            <div className={classes.container}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={6} md={4}>
                        <form>
                            <Card login
                                  className={classes[this.state.cardAnimaton]}>
                                <CardHeader
                                    className={`${classes.cardHeader} ${classes.textCenter}`}
                                    color="rose"
                                >
                                    <h4 className={classes.cardTitle}>
                                        Авторизация через ВК
                                    </h4>
                                </CardHeader>
                                <CardBody style={{textAlign: 'center'}}>
                                    <div id="vk_auth"
                                         className={classes.vkAuth} />
                                </CardBody>
                            </Card>
                        </form>
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}

LoginPage.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(loginPageStyle)(LoginPage)
