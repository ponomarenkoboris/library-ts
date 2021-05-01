import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './app/state'
import {App} from './App'

ReactDom.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.querySelector('#root')
)