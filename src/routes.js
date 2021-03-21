import Index from 'app_screens/index'
// import Home from 'app_screens/home'


export const routes = [
    {
        name: 'index',
        displayName: 'Index',
        component: Index,
        screenOptions: { headerTransparent: true, title: "" },
        authProtection: false,
        icon: 'home',
    },
    // {
    //     name: 'home',
    //     displayName: 'Inicio',
    //     component: Home,
    //     icon: 'home',
    //     authProtection: true,
    // },
]
