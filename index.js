import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native'
import { initializeApp, getApps, getApp } from "firebase/app"

import App from 'src/App'
import { configureStore } from 'src/store'
import { name as appName } from './app.json'
import { tokenReviewTime, FIREBASE_CREDENTIALS } from 'src/settings'
import TokenRefresh from 'global_components/TokenRefresh'

export const store = configureStore()
const firebaseApp = getApps().length === 0 && initializeApp(FIREBASE_CREDENTIALS)


const Root = () => (
    <Provider store={ store }>
        <TokenRefresh reviewTime={ tokenReviewTime } />
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => Root)
