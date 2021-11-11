import React from 'react'
import {Redirect} from 'react-router-dom'
import {ACCESS_TOKEN} from '../../api/mafiaStatisticsApi'

class OAuth2RedirectHandler extends React.Component {
    getUrlParameter(name) {
        name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]')
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)')

        const results = regex.exec(this.props.location.search)
        return results === null
            ? ''
            : decodeURIComponent(results[1].replace(/\+/g, ' '))
    };

    render() {
        const token = this.getUrlParameter('token')
        const error = this.getUrlParameter('error')

        if (token) {
            localStorage.setItem(ACCESS_TOKEN, token)

            return <Redirect to={{
                pathname: '/statistics/players/me',
                state: {from: this.props.location}
            }} />
        } else {
            return <Redirect to={{
                pathname: '/auth/login',
                state: {
                    from: this.props.location,
                    error: error
                }
            }} />
        }
    }
}

export default OAuth2RedirectHandler
