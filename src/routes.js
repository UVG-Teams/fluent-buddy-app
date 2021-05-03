import React, { useState, setState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { layoutColors } from 'src/settings'
import Index from 'app_screens/index'
import Home from 'app_screens/home'
import Profile from 'app_screens/profile'
import Settings from 'app_screens/settings'
import Chat from 'app_screens/chat'

import { store } from '../index'
import * as actions from 'state/actions/selects'




export const routes = [
    {
        name: 'index',
        displayName: 'Index',
        component: Index,
        screenOptions: {
            headerTransparent: true,
            title: ''
        },
        authProtection: false,
        icon: null,
    },
    {
        name: 'home',
        displayName: 'Inicio',
        component: Home,
        screenOptions: {
            title: 'Fluent Buddy',
            headerTitleStyle: {
                fontFamily: 'Poppins-Medium',
                color: '#ffffff'
            },
            headerTransparent: true,
            headerLeft: null,
            headerRight: () => (
                <TouchableOpacity style={{marginRight: 30}} onPress={() => store.dispatch(actions.setModalVisible(true))}>
                    <FontAwesomeIcon icon={faPlus} size={18} color={layoutColors.white} />
                </TouchableOpacity>
            )
        },
        authProtection: true,
        icon: null,
    },
    {
        name: 'profile',
        displayName: 'Perfil',
        component: Profile,
        screenOptions: {
            title: 'Fluent Buddy',
            // headerStyle: {
            //     backgroundColor: layoutColors.seaGreen
            // }
            headerTransparent: true,
            headerLeft: null,
        },
        authProtection: true,
        icon: null,
        headerLeft: null,

    },
    {
        name: 'settings',
        displayName: 'Ajustes',
        component: Settings,
        screenOptions: {
            title: 'Fluent Buddy',
            headerTitleStyle: {
                fontFamily: 'Poppins-Medium',
                color: '#ffffff'
            },
            headerTransparent: true,
            headerLeft: null,
        },
        authProtection: true,
        icon: null,
    },
    {
        name: 'chat',
        displayName: 'Chat',
        component: Chat,
        screenOptions: {
            headerShown: false
        },
        authProtection: true,
        icon: null,
    },
]
