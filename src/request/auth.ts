const TokenKey = 'fast-token';
const TokenPrefix = 'Bearer ';
const isLogin = () => !!localStorage.getItem(TokenKey);
const getToken = () => localStorage.getItem(TokenKey);
const setToken = (token: string) => {
    localStorage.setItem(TokenKey, token);
};
const clearToken = () => {
    localStorage.removeItem(TokenKey);
};
export {
    TokenPrefix, isLogin, getToken, setToken, clearToken,
};
