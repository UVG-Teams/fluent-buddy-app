import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux'

import { routes } from './routes'
import * as selectors from 'state/reducers'


const Stack = createStackNavigator()

const App = ({ isAuthenticated }) => {

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
