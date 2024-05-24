const generateRandomString = () => {
    let result = '';
    for (let i = 0; i < 3; i++) {
        const charCode = Math.floor(Math.random() * 26) + 97; // a-z
        result += String.fromCharCode(charCode);
    }
    return result;
}

export const generateUniqueID = () => {
    return `${ generateRandomString() }_${ new Date().getTime() }`
}