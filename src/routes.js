import Dashboard from './views/Dashboard/Dashboard'
import LoginPage from './views/LoginPage/LoginPage'
import Upload from './views/Manage/Manage'
import PlayerProfile from './views/PlayerProfile/PlayerProfile'

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
        component: Upload,
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
