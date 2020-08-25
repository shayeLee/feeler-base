function getAnimationendEventName() {
    const EVENT_NAME_MAP = {
        'animation': 'animationend',
        'WebkitAnimation': 'webkitAnimationEnd',
        'MozAnimation': 'mozAnimationEnd',
        'OAnimation': 'oAnimationEnd',
        'msAnimation': 'MSAnimationEnd'
    };

    const testEl = document.createElement('div');
    const style = testEl.style;

    // On some platforms, in particular some releases of Android 4.x,
    // the un-prefixed "animation" and "transition" properties are defined on the
    // style object but the events that fire will still be prefixed, so we need
    // to check if the un-prefixed events are useable, and if not remove them
    // from the map
    if (!('AnimationEvent' in window)) {
        return '';
    }

    for (let styleName in EVENT_NAME_MAP) {
        if (styleName in style) {
            return EVENT_NAME_MAP[styleName];
        }
    }
}

export {
    getAnimationendEventName
}