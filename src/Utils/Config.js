export const serverURL = 'http://127.0.0.1:5000';

export const apiEndPoints = {
    config:{
        authentication: {
            loginAuth: '/api/v1/auth/login',
            isAuth: '/api/v1/auth/is-auth',
            logout: '/api/v1/auth/logout'
        }
    },
    services:{
        htmh: {
            create: '/api/v1/services/htmh/create',
            subscribe: '/api/v1/services/htmh/subscribe',
            isCreated: '/api/v1/services/htmh/is-created',
            getService: '/api/v1/services/htmh/get'
        }
    },

    device: {
        list: '/api/v1/device/list',
        setFriendlyName: '/api/v1/device/set-friendly-name'
    },
    compute: {
      fee: '/api/v1/compute/fee'
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
