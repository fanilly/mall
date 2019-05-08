const Storage = {
    set(name, value) {
        if (!name) return;
        if (typeof value !== 'string') {
            value = JSON.stringify(value);
        }
        window.localStorage.setItem(name, value);
    },

    remove(name) {
        if (!name) return;
        return window.localStorage.removeItem(name);
    },

    get(name) {
        if (!name) return;
        return window.localStorage.getItem(name);
    }
};

export default Storage;