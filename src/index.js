import 'assets/scss/material-dashboard-pro-react.scss?v=1.5.0'
import {createBrowserHistory} from 'history'

import AuthLayout from 'layouts/Auth.jsx'
import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import {Redirect, Route, Router, Switch} from 'react-router-dom'
import {YMInitializer} from 'react-yandex-metrika'
import OAuth2RedirectHandler from './components/OAuth2/OAuth2RedirectHandler'
import Statistics from './layouts/Statistics'

const hist = createBrowserHistory()

ReactGA.initialize('UA-215581936-1')

ReactDOM.render((<>
        <YMInitializer accounts={[86902484]}
                       options={{
                           clickmap: true,
                           trackLinks: true,
                           accurateTrackBounce: true,
                           webvisor: true,
                           trackHash: true
                       }}
                       version="2"/>
        <Router history={hist}>
            <Switch>
                <Route path="/auth" component={AuthLayout}/>
                <Route path="/statistics" component={Statistics}/>
                <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}/>
                <Redirect from="/" to="/statistics/dashboard"/>
            </Switch>
        </Router>
    </>),
    document.getElementById('root')
)
