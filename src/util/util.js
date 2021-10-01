const getMention = (gender) => {
    let mention = 'г-н'

    if (gender === 'MALE') {
        mention = 'г-н'
    } else if (gender === 'FEMALE') {
        mention = 'г-жа'
    }

    return mention
}

export default getMention
