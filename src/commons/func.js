export const limitStr = (str, n, symb) => {
    if (!n && !symb) return str;
    if (str.length <= n) return str
    symb = symb || '...';
    return str.substr(0, n - symb.length) + symb;
}

export const decodeMarkup = (text) => {
    return {__html: text}
}

export const timeFormat = (time) => {
    const current = new Date();
    const previous = new Date(time * 1000);
    const elapsed = current - previous;

    const min = 60 * 1000;
    const hour = min * 60;
    const day = hour * 24;
    const month = day * 30;
    const year = month * 365;

    if (elapsed < hour) {
        return Math.round(elapsed / min) + " minutes ago";
    } else if (elapsed < day) {
        return Math.round(elapsed / hour) + " hours ago";
    } else if (elapsed < month) {
        return Math.round(elapsed / day) + " days ago";
    } else if (elapsed < year) {
        return Math.round(elapsed / month) + " months ago";
    } else {
        return Math.round(elapsed / year) + " years ago";
    }
};