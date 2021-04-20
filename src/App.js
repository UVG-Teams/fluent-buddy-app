import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'

import { routes } from 'src/routes'
import * as selectors from 'state/reducers'


const Stack = createStackNavigator()

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
