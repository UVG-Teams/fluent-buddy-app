import { layoutColors } from 'src/settings'
import Index from 'app_screens/index'
import Home from 'app_screens/home'
import Profile from 'app_screens/home/profile'
import Settings from 'app_screens/home/settings'


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
        },
        authProtection: true,
        icon: null,
    },
    {
        name: 'settings',
        displayName: 'Ajustes',
        component: Settings,
        screenOptions: {
            title: 'Fluent Buddy',
            // headerStyle: {
            //     backgroundColor: layoutColors.seaGreen
            // }
            headerTransparent: true,
        },
        authProtection: true,
        icon: null,
    },
]
