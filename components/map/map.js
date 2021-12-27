import './map.scss'
export default {
    name: 'Map',
    data: () => ({
        popup: ''
    }),
    methods: {
        popupToggle() {
            this.popup = this.popup === 'active' ? '' : 'active'
        }
    } 
}
