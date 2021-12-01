import defaultAvatar from '../assets/img/default-avatar.png'

export const getSubtextDate = (fromDate, toDate) => {
    const fromDateObj = new Date(fromDate)
    const toDateObj = new Date(toDate)

    const options = {year: 'numeric', month: 'long', formatMatcher: 'basic'}

    const strFromDate = fromDateObj.toLocaleDateString('ru', options)
    const strToDate = toDateObj.toLocaleDateString('ru', options)

    return strFromDate === strToDate
        ? `${strFromDate}`
        : `${strFromDate} - ${strToDate}`
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
