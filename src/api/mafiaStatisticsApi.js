import * as axios from 'axios'

const baseURL = 'http://localhost:8080/api'

const axiosInstance = axios.create({baseURL})

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
    }
}
