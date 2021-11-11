import defaultAvatar from '../assets/img/default-avatar.png'

export const getMention = (gender) => {
    let mention = 'г-н '

    if (gender === 'MALE') {
        mention = 'г-н '
    } else if (gender === 'FEMALE') {
        mention = 'г-жа '
    }

    return mention
}

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

export const getPhotoUrl = (photoUrl) => {
    const wrongPhotos = [
        'https://vk.com/images/camera_200.png',
        'https://vk.com/images/deactivated_200.png'
    ]

    let photo = photoUrl
        ? photoUrl
        : defaultAvatar

    if (wrongPhotos.includes(photoUrl)) {
        photo = defaultAvatar
    }

    return photo
}

export const isAdmin = (user) => {
    return user.roles.map(role => role.authority).includes('ADMIN')
}
