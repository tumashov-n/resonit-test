import { LocalStorageService } from './local-storage-service'

const STORAGE_KEY = 'userId'

export default {
    set(userId) {
        LocalStorageService.setItem(STORAGE_KEY, userId);
    },
    get() {
        return LocalStorageService.getItem(STORAGE_KEY);
    },
    remove() {
        return LocalStorageService.removeItem(STORAGE_KEY);
    }
}
