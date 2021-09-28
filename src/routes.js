import PlayerProfile from './views/Player/PlayerProfile'
import StatisticsDashboard
    from './views/StatisticsDashboard/StatisticsDashboard'
import Upload from './views/Upload/Upload'

const dashRoutes = [
    {
        path: '/dashboard',
        name: 'Статистика клуба игры в мафию - Ничего Личного',
        component: StatisticsDashboard,
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
    }
]

export default dashRoutes
