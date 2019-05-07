const Storage = {
    setStorage(name, value) {
        if (!name) return;
        if (typeof value !== 'string') {
            value = JSON.stringify(value);
        }
        window.localStorage.setItem(name, value);
    },

    removeStorage(name) {
        if (!name) return;
        return window.localStorage.removeItem(name);
    },

    getStorage(name) {
        if (!name) return;
        return window.localStorage.getItem(name);
    }
};

export default Storage;