export default function ({ $axios }, inject) {
    const api = $axios.create()
    api.setBaseURL('http://api.efs.demostorage.site/api/v1/')
    inject('api', api)
}