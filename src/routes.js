import Dashboard from './views/Dashboard/Dashboard'
import LoginPage from './views/LoginPage/LoginPage'
import PlayerProfile from './views/PlayerProfile/PlayerProfile'
import Upload from './views/Upload/Upload'

const dashRoutes = [
    {
        path: '/dashboard',
        name: 'Статистика клуба игры в мафию - Ничего Личного',
        component: Dashboard,
        layout: '/admin'
    },
    {
        path: '/players/:id?',
        name: 'Профиль игрока',
        component: PlayerProfile,
        layout: '/admin'
    },
    {
        path: '/upload',
        name: 'Загрузить',
        component: Upload,
        layout: '/admin'
    },
    {
        path: '/login-page',
        name: 'Авторизация',
        component: LoginPage,
        layout: '/auth'
    }
]

export default dashRoutes
