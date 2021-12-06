import Dashboard from './views/Dashboard/Dashboard'
import LoginPage from './views/LoginPage/LoginPage'
import Manage from './views/Manage/Manage'
import PlayerProfile from './views/PlayerProfile/PlayerProfile'
import Search from './views/Search/Search'

const dashRoutes = [
    {
        path: '/dashboard',
        name: 'Статистика клуба игры в мафию - Ничего Личного',
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
        path: '/manage',
        name: 'Управление',
        component: Manage,
        layout: '/statistics'
    },
    {
        path: '/search/players',
        name: 'Поиск по игрокам',
        component: Search,
        layout: '/statistics'
    },
    {
        path: '/login',
        name: 'Авторизация',
        component: LoginPage,
        layout: '/auth'
    }
]

export default dashRoutes
