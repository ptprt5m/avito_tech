export const limitStr = (str, n, symb) => {
    if (!n && !symb) return str;
    if (str.length <= n) return str
    symb = symb || '...';
    return str.substr(0, n - symb.length) + symb;
}

export const decodeMarkup = (text) => {
    return {__html: text}
}