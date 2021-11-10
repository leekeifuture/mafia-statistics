import 'assets/scss/material-dashboard-pro-react.scss?v=1.5.0'
import {createBrowserHistory} from 'history'

import AuthLayout from 'layouts/Auth.jsx'
import React from 'react'
import ReactDOM from 'react-dom'
import {Redirect, Route, Router, Switch} from 'react-router-dom'
import OAuth2RedirectHandler from './components/OAuth2/OAuth2RedirectHandler'
import Statistics from './layouts/Statistics'

const hist = createBrowserHistory()

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path="/auth" component={AuthLayout} />
            <Route path="/statistics" component={Statistics} />
            <Route path="/oauth2/redirect" component={OAuth2RedirectHandler} />
            <Redirect from="/" to="/statistics/dashboard" />
        </Switch>
    </Router>,
    document.getElementById('root')
)
