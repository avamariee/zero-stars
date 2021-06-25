// decode token and get the user's info
import decode from 'jwt-decode';

class AuthService {
    // get user data
    getProfile() {
        return decode(this.getToken());
    }

    // user logged in?
    loggedIn() {
        // saved token? if so, is it still valid
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }

    // token is expired?
    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else return false;
        } catch (err) {
            return false;
        }
    }

    getToken() {
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token');
    }

    login(idToken) {
        // Saves user token to localStorage
        localStorage.setItem('id_token', idToken);
        window.location.assign('/');
    }

    logout() {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
        // reload and reset
        window.location.assign('/');
    }
}

export default new AuthService();