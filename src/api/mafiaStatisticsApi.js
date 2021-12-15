import * as axios from 'axios'

export const ACCESS_TOKEN = 'accessToken'
export const API_BASE_URL = 'https://api.statistics.mafia-brest.by'
export const OAUTH2_REDIRECT_URI = 'http://statistics.mafia-brest.by/oauth2/redirect'

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
    uploadNumbersStatistics(file, statisticsType) {
        const formData = new FormData()
        formData.append('file', file, file.name)

        return axiosInstance.post('/upload/excel', formData, {
            params: {statisticsType: statisticsType.toUpperCase()}
        })
            .then(response => response.data)
    },
    getPlayerById(id) {
        return axiosInstance.get(`/players/${id}`)
            .then(response => response.data)
    },
    getDashboardInfo() {
        return axiosInstance.get('/statistics/dashboard')
            .then(response => response.data)
    },
    searchPlayersByNickname(query) {
        return axiosInstance.get('/players/search', {
            params: {query}
        })
            .then(response => response.data)
    }
}
