import * as axios from 'axios'

export const ACCESS_TOKEN = 'accessToken'

let API_BASE_URL
let OAUTH2_REDIRECT_URI

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    API_BASE_URL = process.env.REACT_APP_API_BASE_URL
    OAUTH2_REDIRECT_URI = process.env.REACT_APP_OAUTH2_REDIRECT_URI
} else if (process.env.NODE_ENV === 'local') {
    API_BASE_URL = 'http://localhost:8080'
    OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect'
} else {
    API_BASE_URL = 'https://api.statistics.mafia-brest.com'
    OAUTH2_REDIRECT_URI = 'https://statistics.mafia-brest.com/oauth2/redirect'
}

export const APP_PROPERTIES = {API_BASE_URL, OAUTH2_REDIRECT_URI}

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true
})

axiosInstance.interceptors.request.use(config => {
    if (localStorage.getItem(ACCESS_TOKEN)) {
        config.headers.common['Authorization'] =
            'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
    } else {
        delete config.headers.common['Authorization']
    }

    return config
})

export const mafiaStatisticsApi = {
    uploadStatistics(files) {
        const formData = new FormData()
        for (let i = 0; i < files.length; i++) {
            formData.append('files', files[i])
        }
        return axiosInstance.post('/upload/files', formData)
            .then(response => response.data)
    },
    getPlayerById(id, isMinInfo = false) {
        return axiosInstance.get(`/players/${id}`, {
            params: {isMinInfo}
        })
            .then(response => response.data)
    },
    getDashboardInfo() {
        return axiosInstance.get('/statistics/dashboard')
            .then(response => response.data)
    },
    getRatingByMonths(minGames) {
        return axiosInstance.get('/statistics/rating', {
            params: {minGames}
        })
            .then(response => response.data)
    },
    getRatingByOneMonth(date, minGames) {
        return axiosInstance.get(`/statistics/rating/${date}`, {
            params: {minGames}
        })
            .then(response => response.data)
    },
    searchPlayersByNickname(query) {
        return axiosInstance.get('/players/search', {
            params: {query}
        })
            .then(response => response.data)
    },
    getAllGames() {
        return axiosInstance.get('/host/game')
            .then(response => response.data)
    }
}

export const utilApi = {
    isImageExists(image_url) {
        return axios.head(image_url).then(response => response.data)
    }
}
