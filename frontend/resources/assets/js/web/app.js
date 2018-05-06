import '@web/bootstrap'
import React from 'react'
import ReactDOM from 'react-dom'
import App from '@web/containers/App'
import { Provider } from 'react-redux'
import store from '@web/store'
require('wowjs')
import 'bulma/css/bulma.css'
import '@web/scss/main.scss'

ReactDOM.render((
    <Provider store={store}>
        <App/>
    </Provider>
), document.getElementById('root'))