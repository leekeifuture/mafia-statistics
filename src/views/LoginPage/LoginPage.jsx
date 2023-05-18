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
import {APP_PROPERTIES} from '../../api/mafiaStatisticsApi'
import Button from '../../components/CustomButtons/Button'

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        // We use this to make the card to appear after the page has been rendered
        this.state = {
            cardAnimaton: 'cardHidden'
        }
    }

    componentDidMount() {
        // We add a hidden class to the card and after 700 ms we delete it and the transition appears
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
        const VK_AUTH_URL =
            APP_PROPERTIES.API_BASE_URL + '/oauth2/authorize/vk?redirect_uri=' +
            APP_PROPERTIES.OAUTH2_REDIRECT_URI

        const {classes} = this.props
        return (
            <div className={classes.container}>
                <GridContainer justifyContent="center">
                    <GridItem xs={12} sm={6} md={4}>
                        <form>
                            <Card login
                                  className={classes[this.state.cardAnimaton]}>
                                <CardHeader
                                    className={`${classes.cardHeader} ${classes.textCenter}`}
                                    color="primary"
                                >
                                    <h4 className={classes.cardTitle}>
                                        Авторизация через ВК
                                    </h4>
                                </CardHeader>
                                <CardBody style={{textAlign: 'center'}}>
                                    <div>
                                        Пока что авторизация используется только
                                        в административных целях. Авторизоваться
                                        можно при помощи ВК. Приложение запросит
                                        разрешение на просмотр публичной
                                        информации, после чего вы будете
                                        перенаправлены обратно на этот сайт.
                                    </div>
                                    <br/>
                                    <Button href={VK_AUTH_URL} color="success">
                                        Войти
                                    </Button>
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
