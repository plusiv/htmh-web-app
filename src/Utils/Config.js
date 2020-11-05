export const serverURL = 'http://127.0.0.1:5000';

export const apiEndPoints = {
    config:{
        authentication: {
            loginAuth: '/api/v1/auth/login',
            isAuth: '/api/v1/auth/is-auth',
            logout: '/api/v1/auth/logout'
        }
    },
    device: {
        list: '/api/v1/device/list'
    }
}

export const axiosConfig = {
    headers: {
        'Accept':'application/json',
        'Content-Type':'application/json',
    },
    withCredentials: true
};

export const endPoints = {
    defaultPage: '/',
    loginPage: '/login',
    homePage: '/home'
};
