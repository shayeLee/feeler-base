 (function () {
    let lastTime = 0;
    const vendors = ['webkit', 'moz'];

    //如果window.requestAnimationFrame为undefined先尝试浏览器前缀是否兼容
    for (let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    //如果仍然不兼容，则使用setTimeout进行兼容操作
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (callback) {
            const currTime = new Date().getTime();
            const timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
            const id = window.setTimeout(function () {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        }
    }

    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        }
    }
})();

export const requestAnimationFrame = (callback) => {
    window.requestAnimationFrame(callback);
}

export const cancelAnimationFrame = (callback) => {
    window.cancelAnimationFrame(callback);
}