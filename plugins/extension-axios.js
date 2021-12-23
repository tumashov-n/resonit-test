export default function ({ $axios }, inject) {
    const api = $axios.create({
        headers: {
            // 'Content-Type': 'application/json', 
            // Authorization: 'Bearer 201|DZjmQkRvc1ECGpKLSLt0aOUbGXfcFkdXtrToiRen'
        }
    })
    api.setBaseURL('http://api.efs.demostorage.site/api/v1/')
    inject('api', api)
}
