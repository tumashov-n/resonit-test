export default function ({ $axios }, inject) {
    const api = $axios.create({
        /* headers: {
            'Content-Type': 'application/json', 
            Authorization: 'Bearer 202|w18eGtnNwnHOhkWuOde4IM66EKcGMjDHCyAwlyxj'
        } */
    })
    api.setBaseURL('http://api.efs.demostorage.site/api/v1/') 
    inject('api', api)
}
