import React from 'react';
// import { NavigationContainer } from '@react-navigation/native'
// import { createDrawerNavigator } from '@react-navigation/drawer'
// import {connect} from 'react-redux';

import Home from './app/home/index'
import {Text} from 'react-native'

const App = () => {
    return (
        <>
            <Home/>
        </>
   );
};

// export default connect(
//     state => ({
//         isAuthenticated: selectors.isAuthenticated(state),
//     })
// )(App)

export default App;
