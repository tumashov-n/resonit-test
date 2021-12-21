export const LocalStorageService = {
    /*
     * Get an item from LocalStorage
     * Allows saving any JSON data
     * @param {String} key - Key to retrieve data by
     * @param {*} [fallback] - a fallback value if key is not found
     * @return {*}
     */
    getItem (key, fallback) {
        try {
            const item = window.localStorage.getItem(key)
            return item ? window.JSON.parse(item) : fallback
        } catch (err) {
            return fallback
        } 
    },
    /*
     * Sets an item by its key
     * @param {String} key - Key to save by
     * @param {*} value - Value to save. Transforms to a JSON string
     */
    setItem (key, value = {}) {
        if(process.browser){
            window.localStorage.setItem(key, window.JSON.stringify(value))
        }
    },
    /*
     * Remove item by its key
     * @param {string} key
     */
    removeItem (key) {
        if(process.browser){
            window.localStorage.removeItem(key)
        }
    },
    /*
     * Removes all items from storage
     */
    clearAllItems () {
        if(process.browser){
            window.localStorage.clear()
        }
    }
}
