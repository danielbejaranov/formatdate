function getTimestamp() {
    return Date.now();
}

function getLongTime(locale = 'es-ES') {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short',
    }
    return new Date().toLocaleDateString(locale, options);
}

function getShortTime(locale = 'es-ES') {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    return new Date().toLocaleDateString(locale, options);
}

module.exports = {
    getTimestamp,
    getLongTime,
    getShortTime
};