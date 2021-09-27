import PlayerProfile from './views/Player/PlayerProfile'
import Upload from './views/Upload/Upload'

const dashRoutes = [
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
