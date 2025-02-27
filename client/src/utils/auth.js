import decode from 'jwt-decode';

class AuthService {
    //Authentication Token - set token and expiration to local storage
    setToken(token, expirationTime) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('tokenExpiration', expirationTime);
    };

    // Retrieve user token from local storage
    // getToken() {
    //     const token = localStorage.getItem('token');
    //     const expiration = localStorage.getItem('tokenExpiration');
    //     const userToken = { token: token, expriationTime: expiration };
    //     return userToken;
    // };

    // Check if stored token is expired
    // isTokenExpired() {
    //     const expiration = localStorage.getItem('tokenExpiration');
    //     if (Date.now() > expiration) {
    //         localStorage.removeItem('token');
    //         localStorage.removeItem('tokenExpiration');
    //         return true;
    //     } else {
    //         return false;
    //     }
    // };

    // Get JWT token from local storage
    getJWTToken() {
        const JWTToken = localStorage.getItem('id_token');
        return JWTToken;
    };

    //Check if JWT Token is expired
    isJWTTokenExpired() {
        const token = this.getJWTToken();
        if (token) {
            const decoded = decode(token);
            if (decoded.exp < Date.now()/1000) {
                localStorage.removeItem('id_token');
                return true;
            }
        }
        return false;
    }
    
    getProfile() {
        const token = this.getJWTToken();
        if (token && !this.isJWTTokenExpired()) {
            return decode(token);
        }
        return null;
    };

    login(idToken) {
        localStorage.setItem('id_token', idToken);
        //redirect to homepage
        return window.location.assign('/'); 
    };

    logout() {
        localStorage.removeItem('id_token');
        localStorage.removeItem('tokenExpiration');
        window.location.reload();
    };

    // Check if logged in with JWT Token
    loggedIn() {
        const token = this.getJWTToken();
        return token && !this.isJWTTokenExpired();
    };
}

export default new AuthService;