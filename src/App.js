import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import 'react-native-gesture-handler'
import SplashScreen from 'react-native-splash-screen'
import firebase from "firebase/app"
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { routes } from 'src/routes'
import * as selectors from 'state/reducers'
import { FIREBASE_CREDENTIALS } from 'src/settings'


const Stack = createStackNavigator()
export const firebaseApp = firebase.apps.length === 0 && firebase.initializeApp(FIREBASE_CREDENTIALS)

const App = ({ isAuthenticated }) => {
    useEffect(() => {
        SplashScreen.hide()
    }, [])

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="index"
            >
                {
                    routes.filter(
                        route => route.authProtection == isAuthenticated
                    ).map(route => (
                        <Stack.Screen
                            key={ route.name }
                            name={ route.name }
                            component={ route.component }
                            options={ route.screenOptions }
                        />
                    ))
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default connect(
    state => ({
        isAuthenticated: selectors.isAuthenticated(state),
    })
)(App)
