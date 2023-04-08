import ReactGA from 'react-ga'
import ym from 'react-yandex-metrika'
import defaultAvatar from '../assets/img/default-avatar.png'

export const getSubtextDate = (fromDate, toDate) => {
    const strFromDate = getReadableDate(fromDate)
    const strToDate = getReadableDate(toDate)

    return strFromDate === strToDate
        ? `${strFromDate}`
        : `${strFromDate} - ${strToDate}`
}

export const getReadableDate = (date, withDay = false) => {
    const options = {
        year: 'numeric',
        month: 'long',
        formatMatcher: 'basic'
    }
    if (withDay) options.day = 'numeric'

    return new Date(date).toLocaleDateString('ru', options)
}

export const getMention = (user) => {
    if (user == null) {
        return ''
    }

    let mention = 'г-н '

    if (user.gender === 'MALE') {
        mention = 'г-н '
    } else if (user.gender === 'FEMALE') {
        mention = 'г-жа '
    }

    return mention
}

export const getPhotoUrl = (user) => {
    const wrongPhotos = [
        'https://vk.com/images/camera_200.png',
        'https://vk.com/images/deactivated_200.png'
    ]

    let photo = defaultAvatar

    if (user && user.photoUrl) {
        photo = user.photoUrl

        if (wrongPhotos.includes(user.photoUrl)) {
            photo = defaultAvatar
        }
    }

    return photo
}

export const isAdmin = (user) => {
    return user.roles.includes('ADMIN')
}

export const isHost = (user) => {
    return user.roles.includes('ADMIN')
}

export const trackMetriks = (pathname) => {
    ReactGA.pageview(pathname) // Google Analytics
    ym('hit', pathname) // Yandex Metrica
}

export const capitalize = string =>
    string.charAt(0).toUpperCase() + string.slice(1)
