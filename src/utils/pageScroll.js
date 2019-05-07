export default (function() {
    const fn = function(e) {
        e.preventDefault();
        e.stopPropagation();
    };
    let flag = false;

    return {
        handle(el) {
            if (flag) return;
            flag = true;
            (el || document).addEventListener('touchmove', fn);
        },
        unhandle(el) {
            flag = false;
            (el || document).removeEventListener('touchmove', fn);
        }
    };
})();