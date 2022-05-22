import Dashboard from './views/Dashboard/Dashboard'
import ErrorPage from './views/ErrorPage/ErrorPage'
import LoginPage from './views/LoginPage/LoginPage'
import Data from './views/Manage/Data'
import Players from './views/Manage/Players'
import PlayerProfile from './views/PlayerProfile/PlayerProfile'
import RatingByMonths from './views/Rating/RatingByMonths'
import RatingByOneMonth from './views/Rating/RatingByOneMonth'
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
        path: '/manage/players',
        name: 'Игроки',
        component: Players,
        layout: '/statistics'
    },
    {
        path: '/manage/data',
        name: 'Статистика',
        component: Data,
        layout: '/statistics'
    },
    {
        path: '/search/players',
        name: 'Поиск',
        component: Search,
        layout: '/statistics'
    },
    {
        path: '/rating',
        name: 'Рейтинг',
        component: RatingByMonths,
        layout: '/statistics',
        exact: true
    },
    {
        path: '/rating/:date?',
        name: 'Рейтинг за месяц',
        component: RatingByOneMonth,
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
