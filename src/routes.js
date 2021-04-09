import { layoutColors } from 'src/settings'
import Index from 'app_screens/index'
import Home from 'app_screens/home'


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
            headerStyle: {
                backgroundColor: layoutColors.seaGreen
            }
        },
        authProtection: true,
        icon: null,
    },
]
