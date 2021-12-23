import './account-sidebar.scss'
export default {
    name: 'AccountSidebar',
    data: () => ({
        sidebarState: ''
    }),
    methods: {
        sidebarToggle() {
            this.sidebarState = this.sidebarState === 'account-sidebar--toggled' ? '' : 'account-sidebar--toggled'
            // console.log(this.sidebarState)
        }
    }
}
