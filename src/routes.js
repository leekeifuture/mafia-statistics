import Dashboard from './views/Dashboard/Dashboard'
import ErrorPage from './views/ErrorPage/ErrorPage'
import LoginPage from './views/LoginPage/LoginPage'
import Data from './views/Manage/Data'
import Games from './views/ManageGames/Games'
import PlayerProfile from './views/PlayerProfile/PlayerProfile'
import Search from './views/Search/Search'

const dashRoutes = [
    {
        path: '/dashboard',
        name: 'Статистика Ничего Личного',
        component: Dashboard,
        layout: '/statistics'
    },
    {
        path: '/players/:id?',
        name: 'Профиль игрока',
        component: PlayerProfile,
        layout: '/statistics'
    },
    {
        path: '/manage/data',
        name: 'Статистика',
        component: Data,
        layout: '/statistics'
    },
    {
        path: '/host/manage/games/all',
        name: 'Все игры',
        component: Games,
        layout: '/statistics'
    },
    {
        path: '/search/players',
        name: 'Поиск',
        component: Search,
        layout: '/statistics'
    },
    {
        path: '/login',
        name: 'Авторизация',
        component: LoginPage,
        layout: '/auth'
    },
    {
        path: '/error',
        name: 'Ошибка',
        component: ErrorPage,
        layout: '/auth'
    }
]

export default dashRoutes
