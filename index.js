import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native'

import App from 'src/App'
import { configureStore } from 'src/store'
import { name as appName } from './app.json'
import { tokenReviewTime } from 'src/settings'
import TokenRefresh from 'global_components/TokenRefresh'

const store = configureStore()

const Root = () => (
    <Provider store={ store }>
        <TokenRefresh reviewTime={ tokenReviewTime } />
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => Root)
